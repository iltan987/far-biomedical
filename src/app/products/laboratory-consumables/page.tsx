import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { ConsumablesGrid } from "@/components/products/consumables-grid";
import { PageSchema } from "@/components/seo/page-schema";
import { Button } from "@/components/ui/button";
import { mergeKeywords, seoKeywordSets } from "@/lib/seo";

const consumablesKeywords = mergeKeywords(
  seoKeywordSets.core,
  seoKeywordSets.products,
  seoKeywordSets.globalReach,
  [
    "laboratory consumables Turkey",
    "biomedical consumables Turkiye",
    "laboratory consumables supplier worldwide",
    "aferez arastirma laboratuvar sarf malzemeleri",
  ]
);

export const metadata: Metadata = {
  title: "Laboratory Consumables",
  description:
    "Browse laboratory consumables from Turkiye including tubes, pipettes, slides, and storage supplies for global biomedical and apheresis-related workflows.",
  keywords: consumablesKeywords,
  alternates: {
    canonical: "/products/laboratory-consumables",
  },
  openGraph: {
    title: "Laboratory Consumables | FAR Better Bio Global Supply",
    description:
      "Essential laboratory consumables for global biomedical, target cell isolation, and apheresis-oriented research needs.",
    url: "/products/laboratory-consumables",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratory Consumables | FAR Better Bio Worldwide",
    description:
      "Find consumables for cell isolation, PBMC processing, and global biomedical lab workflows.",
  },
};

export default function LaboratoryConsumablesPage() {
  return (
    <>
      <PageSchema
        path="/products/laboratory-consumables"
        type="CollectionPage"
        title="Laboratory Consumables | FAR Better Bio Global Supply"
        description="Laboratory consumables supporting biomedical and apheresis-oriented research workflows from Turkiye to global teams."
        keywords={consumablesKeywords}
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
              Laboratory Consumables
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Essential laboratory consumables for your research needs. We
              provide high-quality tubes, pipettes, slides, and storage
              containers for biomedical, PBMC, and apheresis-related workflows.
            </p>
            <p className="text-muted-foreground mt-3 text-sm">
              Need a custom consumables list for your biomedical workflow
              anywhere in the world?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Send your requirements
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Consumables Grid */}
      <section className="py-12 sm:py-16" aria-labelledby="consumables-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="consumables-heading" className="sr-only">
            Available Consumables
          </h2>
          <ConsumablesGrid />
        </div>
      </section>
    </>
  );
}
