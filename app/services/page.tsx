import { Globe, Mail, Truck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              We offer comprehensive laboratory services including the
              processing of blood samples into PBMCs, isolation of target cells
              with high efficiency, and the provision of high-quality
              microscopic imaging.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Nationwide Coverage</p>
                <p className="text-muted-foreground text-sm">
                  Available across Türkiye
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">International Support</p>
                <p className="text-muted-foreground text-sm">
                  Remote technical assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Target Cell Isolation – How We Do It?
            </h2>
            <p className="text-muted-foreground mt-4">
              Our laboratory provides a comprehensive and high-precision cell
              isolation workflow designed to meet research, clinical, and
              industry-level requirements. Each step is performed under
              standardized quality protocols.
            </p>
          </div>
          <WorkflowSteps />
        </div>
      </section>

      {/* Laboratory Supply Services */}
      <section className="bg-muted/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Laboratory Supply Services
            </h2>
            <p className="text-muted-foreground mb-8">
              We provide comprehensive supply services for research
              laboratories. Whatever your needs may be, our specialized team
              identifies high-quality, specific products from around the world
              and delivers them to you in a manner tailored to your
              requirements.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <ServiceFAQs />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
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
              className="text-primary bg-white hover:bg-white/90"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
