import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { InstrumentsList } from "@/components/products/instruments-list";
import { PageSchema } from "@/components/seo/page-schema";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { mergeKeywords, seoKeywordSets } from "@/lib/seo";

type LayoutType = "list" | "2-col" | "3-col";
const VALID_LAYOUTS: LayoutType[] = ["list", "2-col", "3-col"];
const DEFAULT_LAYOUT: LayoutType = "2-col";
const instrumentsKeywords = mergeKeywords(
  seoKeywordSets.core,
  seoKeywordSets.products,
  seoKeywordSets.manufacturerIntent,
  seoKeywordSets.globalReach,
  [
    "laboratory instruments manufacturer Turkey",
    "biomedical laboratory equipment Turkiye",
    "laboratory instruments supplier worldwide",
  ]
);

export const metadata: Metadata = {
  title: "Laboratory Instruments",
  description:
    "Browse high-quality laboratory instruments from Turkiye for global biomedical, apheresis, and aferez-focused workflows including centrifuges, incubators, and autoclaves.",
  keywords: instrumentsKeywords,
  alternates: {
    canonical: "/products/laboratory-instruments",
  },
  openGraph: {
    title: "Laboratory Instruments | FAR Better Bio Global Supply",
    description:
      "Biomedical laboratory instruments supporting global cell isolation and apheresis-related research workflows.",
    url: "/products/laboratory-instruments",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratory Instruments | FAR Better Bio Worldwide",
    description:
      "Explore laboratory equipment for target cell isolation and global biomedical research programs.",
  },
};

export default async function LaboratoryInstrumentsPage() {
  const cookieStore = await cookies();
  const layoutCookie = cookieStore.get("instruments-layout")?.value;
  const initialLayout =
    layoutCookie && VALID_LAYOUTS.includes(layoutCookie as LayoutType)
      ? (layoutCookie as LayoutType)
      : DEFAULT_LAYOUT;

  return (
    <>
      <PageSchema
        path="/products/laboratory-instruments"
        type="CollectionPage"
        title="Laboratory Instruments | FAR Better Bio Global Supply"
        description="Laboratory instruments for biomedical and apheresis-oriented workflows from Turkiye to global partners."
        keywords={instrumentsKeywords}
      />
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button render={<Link href="/products" />} nativeButton={false} variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Products
            </Button>
          </div>

          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Laboratory Instruments
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Explore our comprehensive range of high-quality laboratory
              instruments. From centrifuges and incubators to balances and
              autoclaves, we provide equipment for apheresis and aferez-focused
              biomedical research needs.
            </p>
            <p className="text-muted-foreground mt-3 text-sm">
              For instrument sourcing and biomedical manufacturer collaboration
              requests worldwide, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact our team
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Instruments List */}
      <section className="no-snap py-12 sm:py-16" aria-labelledby="instruments-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="instruments-heading" className="sr-only">
            Available Instruments
          </h2>
          <InstrumentsList initialLayout={initialLayout} />
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="bg-muted/30 py-12 sm:py-16"
        aria-labelledby="help-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="none" className="mx-auto max-w-2xl text-center">
            <h2
              id="help-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
            >
              Need Help Choosing?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team can help you find the right instruments for your specific
              requirements. Contact us for personalized recommendations.
            </p>
            <Button render={<a href={`mailto:${siteConfig.contact.email}`} />} nativeButton={false}>
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Us
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
