import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { GoogleMap } from "@/components/contact/google-map";
import { FadeIn } from "@/components/motion";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FAR Better Bio. Located at METU Teknokent, Ankara, Turkey. Contact us for laboratory services and products.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact FAR Better Bio",
    description: "Reach out to our team for inquiries and support.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Section */}
      <section
        className="from-primary/5 to-background bg-linear-to-b py-8 sm:py-10 lg:py-16"
        aria-labelledby="contact-main-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-8 max-w-2xl sm:mb-10">
            <h1
              id="contact-main-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Contact Us
            </h1>
            <p className="text-muted-foreground mt-3 text-base leading-relaxed">
              Have questions? We&apos;d love to hear from you. Get in touch with
              our team for inquiries about our products and services.
            </p>
          </FadeIn>

          {/* Form + Contact Info */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <FadeIn delay={0.1}>
              <h2 className="mb-4 text-xl font-semibold">Send Us a Message</h2>
              <ContactForm />
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <h2 className="mb-4 text-xl font-semibold">
                Contact Information
              </h2>
              <div className="space-y-3">
                <article className="bg-muted/50 hover:bg-muted/70 flex items-start gap-3 rounded-lg p-4 transition-colors">
                  <div
                    className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    aria-hidden="true"
                  >
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold">Email</h4>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-muted-foreground hover:text-primary block truncate text-sm transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </article>

                <article className="bg-muted/50 hover:bg-muted/70 flex items-start gap-3 rounded-lg p-4 transition-colors">
                  <div
                    className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    aria-hidden="true"
                  >
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Phone</h4>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </article>

                <article className="bg-muted/50 hover:bg-muted/70 flex items-start gap-3 rounded-lg p-4 transition-colors">
                  <div
                    className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    aria-hidden="true"
                  >
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Address</h4>
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
                </article>
              </div>
            </FadeIn>
          </div>

          {/* Full-width Map */}
          <FadeIn delay={0.3} className="mt-10">
            <h2 className="mb-4 text-xl font-semibold">Our Location</h2>
            <GoogleMap />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
