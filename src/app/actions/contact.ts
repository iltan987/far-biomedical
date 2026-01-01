"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";

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

  // Check if environment variables are configured
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error(
      "Email configuration missing: GMAIL_USER or GMAIL_APP_PASSWORD not set"
    );
    return {
      success: false,
      message: "Email service is not configured. Please contact us directly.",
    };
  }

  try {
    // Create transporter using Gmail with App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL_TO || siteConfig.contact.email,
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

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
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
