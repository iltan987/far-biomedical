"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

import { serverEnv } from "@/env/server";
import { siteConfig } from "@/lib/constants";

// Input length limits
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254; // RFC 5321 limit
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

// Simple in-memory rate limiting (resets on server restart)
// For production, consider using Redis or a database
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Hidden field - should always be empty
}

interface ContactResult {
  success: boolean;
  message: string;
  confirmationSent?: boolean;
}

function getClientIp(headersList: Headers): string {
  // Check common headers for client IP
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0];
    if (firstIp) {
      return firstIp.trim();
    }
  }

  const realIp = headersList.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

function formatRetryTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""}`;
  }
  const minutes = Math.ceil(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  }
  const hours = Math.ceil(minutes / 60);
  return `${hours} hour${hours !== 1 ? "s" : ""}`;
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true };
}

// Clean up old rate limit entries periodically
setInterval(
  () => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(ip);
      }
    }
  },
  5 * 60 * 1000
); // Clean up every 5 minutes

export async function sendContactEmail(
  data: ContactFormData
): Promise<ContactResult> {
  // Check honeypot - if filled, it's a bot
  if (data.honeypot) {
    // Silently succeed to not alert bots
    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    };
  }

  // Rate limiting
  const headersList = await headers();
  const clientIp = getClientIp(headersList);
  const rateLimit = checkRateLimit(clientIp);

  if (!rateLimit.allowed) {
    return {
      success: false,
      message: `Too many requests. Please try again in ${formatRetryTime(rateLimit.retryAfter ?? 0)}.`,
    };
  }

  // Validate required fields
  if (!data.name || !data.email || !data.subject || !data.message) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  // Trim and validate input lengths
  const name = data.name.trim();
  const email = data.email.trim();
  const subject = data.subject.trim();
  const message = data.message.trim();

  if (name.length > MAX_NAME_LENGTH) {
    return {
      success: false,
      message: `Name must be ${MAX_NAME_LENGTH} characters or less.`,
    };
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (subject.length > MAX_SUBJECT_LENGTH) {
    return {
      success: false,
      message: `Subject must be ${MAX_SUBJECT_LENGTH} characters or less.`,
    };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      success: false,
      message: `Message must be ${MAX_MESSAGE_LENGTH} characters or less.`,
    };
  }

  if (message.length < 10) {
    return {
      success: false,
      message: "Message must be at least 10 characters.",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    // Create transporter using Gmail with App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: serverEnv.GMAIL_USER,
        pass: serverEnv.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `FAR Better Bio <${serverEnv.GMAIL_USER}>`,
      to: serverEnv.CONTACT_EMAIL_TO || siteConfig.contact.email,
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from the FAR Better Bio website contact form.
IP: ${clientIp}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #991b1b; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
    .value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; border-radius: 4px; border: 1px solid #ddd; margin-top: 10px; }
    .footer { margin-top: 20px; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
      </div>
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${escapeHtml(subject)}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
      </div>
      <div class="footer">
        This message was sent from the FAR Better Bio website contact form.<br>
        <small>IP: ${escapeHtml(clientIp)}</small>
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    if (serverEnv.SEND_CONFIRMATION_EMAIL) {
      // Confirmation email options (best effort - failures are logged but don't fail the submission)
      const confirmationMailOptions = {
        from: `FAR Better Bio <${serverEnv.GMAIL_USER}>`,
        to: email,
        subject: `Thank you for contacting FAR Better Bio - ${subject}`,
        text: generateConfirmationText(name, email, subject, message),
        html: generateConfirmationHtml(name, email, subject, message),
      };

      // Send both emails in parallel
      // Business email must succeed; confirmation email failures are logged but don't fail the submission
      await Promise.all([
        transporter.sendMail(mailOptions),
        transporter.sendMail(confirmationMailOptions).catch((err) => {
          console.error("Failed to send confirmation email:", err);
        }),
      ]);
    } else {
      // Only send business notification
      await transporter.sendMail(mailOptions);
    }

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
      confirmationSent: serverEnv.SEND_CONFIRMATION_EMAIL,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message:
        "Failed to send message. Please try again later or contact us directly.",
    };
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

// Generate plain text confirmation email
function generateConfirmationText(
  name: string,
  email: string,
  subject: string,
  message: string
): string {
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
Dear ${name},

Thank you for contacting FAR Better Bio. This email confirms that we have received your inquiry.

SUBMISSION DETAILS
------------------
Date: ${timestamp}
Email: ${email}
Subject: ${subject}

YOUR MESSAGE:
${message}

------------------

We typically respond within 1-2 business days. If your matter is urgent, please call us at ${siteConfig.contact.phone}.

Best regards,
FAR Better Bio Team

---
FAR Better Bio
Advanced blood-cell separation and apheretic blood filtration technologies
${siteConfig.contact.address.line1}
${siteConfig.contact.address.line2}
${siteConfig.contact.address.city}, ${siteConfig.contact.address.country} ${siteConfig.contact.address.postalCode}

This is an automated confirmation. Please do not reply to this email.
  `.trim();
}

// Generate HTML confirmation email
function generateConfirmationHtml(
  name: string,
  email: string,
  subject: string,
  message: string
): string {
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .wrapper {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #991b1b;
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .header p {
      margin: 10px 0 0;
      opacity: 0.9;
      font-size: 14px;
    }
    .content {
      padding: 30px 20px;
    }
    .greeting {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .confirmation-box {
      background-color: #f0fdf4;
      border: 1px solid #86efac;
      border-radius: 8px;
      padding: 15px;
      margin: 20px 0;
    }
    .details-section {
      background-color: #f9fafb;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    .details-section h3 {
      margin: 0 0 15px;
      color: #374151;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .detail-row {
      margin-bottom: 12px;
    }
    .detail-label {
      font-size: 12px;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .detail-value {
      margin-top: 4px;
      color: #111827;
    }
    .message-box {
      background-color: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      padding: 15px;
      margin-top: 8px;
      white-space: pre-wrap;
    }
    .next-steps {
      margin: 25px 0;
      padding: 20px;
      background-color: #fefce8;
      border-radius: 8px;
      border-left: 4px solid #eab308;
    }
    .next-steps h4 {
      margin: 0 0 10px;
      color: #854d0e;
    }
    .next-steps p {
      margin: 0;
      color: #713f12;
      font-size: 14px;
    }
    .footer {
      background-color: #f9fafb;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    .footer-logo {
      font-weight: 600;
      color: #991b1b;
      font-size: 16px;
    }
    .footer-tagline {
      font-size: 12px;
      color: #6b7280;
      margin: 5px 0 15px;
    }
    .footer-address {
      font-size: 12px;
      color: #9ca3af;
      line-height: 1.5;
    }
    .footer-note {
      margin-top: 15px;
      font-size: 11px;
      color: #9ca3af;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>FAR Better Bio</h1>
        <p>Thank you for contacting us</p>
      </div>

      <div class="content">
        <p class="greeting">Dear ${escapeHtml(name)},</p>

        <div class="confirmation-box">
          <strong>&#10003; Message Received</strong><br>
          <span style="font-size: 14px; color: #166534;">
            Your inquiry has been successfully submitted. This email serves as your confirmation and record.
          </span>
        </div>

        <div class="details-section">
          <h3>Submission Details</h3>

          <div class="detail-row">
            <div class="detail-label">Date & Time</div>
            <div class="detail-value">${timestamp}</div>
          </div>

          <div class="detail-row">
            <div class="detail-label">Your Email</div>
            <div class="detail-value">${escapeHtml(email)}</div>
          </div>

          <div class="detail-row">
            <div class="detail-label">Subject</div>
            <div class="detail-value">${escapeHtml(subject)}</div>
          </div>

          <div class="detail-row">
            <div class="detail-label">Your Message</div>
            <div class="message-box">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
          </div>
        </div>

        <div class="next-steps">
          <h4>What happens next?</h4>
          <p>
            Our team typically responds within 1-2 business days.
            If your matter is urgent, please call us at <strong>${siteConfig.contact.phone}</strong>.
          </p>
        </div>
      </div>

      <div class="footer">
        <div class="footer-logo">FAR Better Bio</div>
        <div class="footer-tagline">
          Advanced blood-cell separation and apheretic blood filtration technologies
        </div>
        <div class="footer-address">
          ${siteConfig.contact.address.line1}<br>
          ${siteConfig.contact.address.line2}<br>
          ${siteConfig.contact.address.city}, ${siteConfig.contact.address.country} ${siteConfig.contact.address.postalCode}
        </div>
        <div class="footer-note">
          This is an automated confirmation. Please do not reply to this email.
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
}
