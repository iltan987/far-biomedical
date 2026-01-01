import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { InstrumentsList } from "@/components/products/instruments-list";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Laboratory Instruments",
  description:
    "Browse our selection of high-quality laboratory instruments including centrifuges, incubators, ovens, balances, autoclaves, and more.",
  openGraph: {
    title: "Laboratory Instruments - FAR Better Bio",
    description:
      "High-quality laboratory instruments for research and clinical applications.",
  },
};

export default function LaboratoryInstrumentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Laboratory Instruments
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Explore our comprehensive range of high-quality laboratory
              instruments. From centrifuges and incubators to balances and
              autoclaves, we provide equipment for all your research needs.
            </p>
          </div>
        </div>
      </section>

      {/* Instruments List */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InstrumentsList />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Need Help Choosing?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team can help you find the right instruments for your specific
              requirements. Contact us for personalized recommendations.
            </p>
            <Button asChild>
              <a href={`mailto:${siteConfig.contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
