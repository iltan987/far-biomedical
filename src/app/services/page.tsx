import { Globe, Mail, Truck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import { ServiceFAQs } from "@/components/services/service-faqs";
import { WorkflowSteps } from "@/components/services/workflow-steps";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive laboratory services including PBMC processing, target cell isolation, quality control, and microscopic imaging throughout Turkey.",
  openGraph: {
    title: "Laboratory Services - FAR Better Bio",
    description: "Professional cell isolation and laboratory services.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Our Services
              </h1>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                We offer comprehensive laboratory services including the
                processing of blood samples into PBMCs, isolation of target
                cells with high efficiency, and the provision of high-quality
                microscopic imaging.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <ImagePlaceholder
                aspectRatio="video"
                label="Laboratory Services"
                className="shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <FadeIn delay={0}>
              <article className="flex items-center gap-3">
                <div
                  className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full"
                  aria-hidden="true"
                >
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Nationwide Coverage</p>
                  <p className="text-muted-foreground text-sm">
                    Available across Türkiye
                  </p>
                </div>
              </article>
            </FadeIn>
            <FadeIn delay={0.1}>
              <article className="flex items-center gap-3">
                <div
                  className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full"
                  aria-hidden="true"
                >
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">International Support</p>
                  <p className="text-muted-foreground text-sm">
                    Remote technical assistance
                  </p>
                </div>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-12 sm:py-16" aria-labelledby="workflow-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="workflow-heading"
              className="text-2xl font-bold sm:text-3xl"
            >
              Target Cell Isolation – How We Do It?
            </h2>
            <p className="text-muted-foreground mt-4">
              Our laboratory provides a comprehensive and high-precision cell
              isolation workflow designed to meet research, clinical, and
              industry-level requirements. Each step is performed under
              standardized quality protocols.
            </p>
          </FadeIn>
          <WorkflowSteps />
        </div>
      </section>

      {/* Laboratory Supply Services */}
      <section
        className="bg-muted/30 py-12 sm:py-16"
        aria-labelledby="supply-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="left">
              <ImagePlaceholder
                aspectRatio="video"
                label="Laboratory Supplies"
                className="shadow-lg"
              />
            </FadeIn>
            <FadeIn direction="none" delay={0.1}>
              <h2
                id="supply-heading"
                className="mb-4 text-center text-2xl font-bold sm:text-3xl lg:text-left"
              >
                Laboratory Supply Services
              </h2>
              <p className="text-muted-foreground mb-8 text-center lg:text-left">
                We provide comprehensive supply services for research
                laboratories. Whatever your needs may be, our specialized team
                identifies high-quality, specific products from around the world
                and delivers them to you in a manner tailored to your
                requirements.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Button asChild>
                  <Link href="/products/laboratory-instruments">
                    Browse Instruments
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/products/laboratory-consumables">
                    Browse Consumables
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16" aria-labelledby="faqs-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <h2
                id="faqs-heading"
                className="mb-8 text-center text-2xl font-bold sm:text-3xl"
              >
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <ServiceFAQs />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="bg-primary text-primary-foreground py-12 sm:py-16"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="none" className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
            >
              Ready to Get Started?
            </h2>
            <p className="mb-6 opacity-90">
              Contact us to discuss your laboratory service needs. Our team is
              here to provide reliable, efficient, and scientifically robust
              solutions.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Us
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
