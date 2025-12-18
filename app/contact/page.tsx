import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { GoogleMap } from "@/components/contact/google-map";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FAR Better Bio. Located at METU Teknokent, Ankara, Turkey. Contact us for laboratory services and products.",
  openGraph: {
    title: "Contact FAR Better Bio",
    description: "Reach out to our team for inquiries and support.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Minimal Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Us
            </h1>
            <p className="text-muted-foreground mt-3 text-base leading-relaxed">
              Have questions? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1: Form + Contact Info */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
              <h2 className="mb-4 text-xl font-semibold">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
              <div className="space-y-3">
                <div className="bg-muted/50 flex items-start gap-3 rounded-lg p-4 transition-colors hover:bg-muted/70">
                  <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">Email</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-muted-foreground hover:text-primary block truncate text-sm transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="bg-muted/50 flex items-start gap-3 rounded-lg p-4 transition-colors hover:bg-muted/70">
                  <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      {siteConfig.contact.address.line1}
                      <br />
                      {siteConfig.contact.address.line2}
                      <br />
                      {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.country}{" "}
                      {siteConfig.contact.address.postalCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Full-width Map */}
          <div className="animate-fade-in mt-10" style={{ animationDelay: "650ms" }}>
            <h2 className="mb-4 text-xl font-semibold">Our Location</h2>
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}
