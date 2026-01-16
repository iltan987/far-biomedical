"use client";

import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { useState } from "react";

import { sendContactEmail } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// Input length limits (must match server-side limits)
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Bot trap - should always be empty
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [confirmationSent, setConfirmationSent] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > MAX_NAME_LENGTH) {
      newErrors.name = `Name must be ${MAX_NAME_LENGTH} characters or less`;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (formData.email.length > MAX_EMAIL_LENGTH) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length > MAX_SUBJECT_LENGTH) {
      newErrors.subject = `Subject must be ${MAX_SUBJECT_LENGTH} characters or less`;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or less`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        setConfirmationSent(result.confirmationSent ?? false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message);
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-card rounded-xl border p-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
        <p
          className={cn(
            "text-muted-foreground",
            confirmationSent ? "mb-2" : "mb-6"
          )}
        >
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
        {confirmationSent && (
          <p className="text-muted-foreground mb-6 text-sm">
            A confirmation email has been sent to your inbox with a copy of your
            message.
          </p>
        )}
        <Button onClick={() => setSubmitStatus(null)} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "error" && (
        <div className="bg-destructive/10 text-destructive flex items-center gap-2 rounded-lg p-4">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">
            {errorMessage || "Something went wrong. Please try again later."}
          </p>
        </div>
      )}

      {/* Honeypot field - hidden from users, bots will fill it */}
      <div className="absolute -left-9999 opacity-0" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="honeypot"
          type="text"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            maxLength={MAX_NAME_LENGTH}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            maxLength={MAX_EMAIL_LENGTH}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          maxLength={MAX_SUBJECT_LENGTH}
          className={errors.subject ? "border-destructive" : ""}
        />
        {errors.subject && (
          <p className="text-destructive text-sm">{errors.subject}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your inquiry..."
          rows={5}
          maxLength={MAX_MESSAGE_LENGTH}
          className={errors.message ? "border-destructive" : ""}
        />
        <div className="flex justify-between">
          {errors.message ? (
            <p className="text-destructive text-sm">{errors.message}</p>
          ) : (
            <span />
          )}
          <p className="text-muted-foreground text-xs">
            {formData.message.length}/{MAX_MESSAGE_LENGTH}
          </p>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
