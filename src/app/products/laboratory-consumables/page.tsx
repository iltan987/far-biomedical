import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { ConsumablesGrid } from "@/components/products/consumables-grid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Laboratory Consumables",
  description:
    "Browse our selection of laboratory consumables including tubes, pipettes, slides, and storage containers.",
  openGraph: {
    title: "Laboratory Consumables - FAR Better Bio",
    description: "Essential laboratory consumables for your research needs.",
  },
};

export default function LaboratoryConsumablesPage() {
  return (
    <>
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
              containers.
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
