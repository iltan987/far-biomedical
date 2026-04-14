import { ArrowRight, Beaker, FlaskConical, Package } from "lucide-react";
import type { Metadata } from "next";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import { PageSchema } from "@/components/seo/page-schema";
import { CtaButton, CtaLink } from "@/components/site/cta-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mergeKeywords, seoKeywordSets } from "@/lib/seo";

const productsKeywords = mergeKeywords(
  seoKeywordSets.core,
  seoKeywordSets.products,
  seoKeywordSets.manufacturerIntent,
  seoKeywordSets.globalReach,
  seoKeywordSets.brand,
  seoKeywordSets.location
);

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore FAR Better Bio products including apheresis and aferez-focused device development programs, laboratory instruments, and consumables for global biomedical workflows.",
  keywords: productsKeywords,
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Global Apheresis and Aferez Device Programs",
    description:
      "Review AutoCeive and related biomedical device programs plus laboratory instruments and consumables for international research teams.",
    url: "/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAR Better Bio Products | Global Apheresis and Aferez Focus",
    description:
      "A biomedical product portfolio covering device R&D, laboratory instruments, and consumables for worldwide partners.",
  },
};

const productCategories = [
  {
    title: "AutoCeive",
    description:
      "Our flagship benchtop blood cell separation device using high-gradient magnetic separation. Fully automated processing for research laboratories.",
    icon: Beaker,
    badge: "Coming Soon",
    href: null,
  },
  {
    title: "Laboratory Instruments",
    description:
      "Browse our selection of high-quality laboratory instruments including centrifuges, incubators, ovens, balances, and more.",
    icon: FlaskConical,
    href: "/products/laboratory-instruments",
  },
  {
    title: "Laboratory Consumables",
    description:
      "Essential laboratory consumables including tubes, pipettes, slides, and storage containers for your research needs.",
    icon: Package,
    href: "/products/laboratory-consumables",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageSchema
        path="/products"
        type="CollectionPage"
        title="Products | Global Apheresis and Aferez Device Programs"
        description="FAR Better Bio product collection with apheresis and aferez-focused device development, laboratory instruments, and consumables for global partners."
        keywords={productsKeywords}
      />
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn
            renderStrategy="paint-safe"
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Products
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              From our innovative cell separation devices to a comprehensive
              range of laboratory equipment and consumables, we provide
              everything you need for apheresis and aferez-oriented research
              workflows in Turkiye and beyond.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16" aria-labelledby="categories-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="categories-heading" className="sr-only">
            Product Categories
          </h2>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            role="list"
          >
            {productCategories.map((category, index) => (
              <FadeIn
                key={category.title}
                delay={index * 0.1}
                renderStrategy="paint-safe"
                className="h-full"
              >
                <article role="listitem" className="h-full">
                  <Card className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    {/* Category Image */}
                    <div className="overflow-hidden">
                      <ImagePlaceholder
                        aspectRatio="4/3"
                        className="rounded-none transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div
                          className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg"
                          aria-hidden="true"
                        >
                          <category.icon className="h-6 w-6" />
                        </div>
                        {category.badge && (
                          <Badge variant="secondary">{category.badge}</Badge>
                        )}
                      </div>
                      <CardTitle className="mt-4 text-xl">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex grow flex-col">
                      <CardDescription className="mb-4 grow text-base">
                        {category.description}
                      </CardDescription>
                      {category.href ? (
                        <CtaLink
                          href={category.href}
                          variant="outline"
                          className="w-full"
                        >
                          Browse {category.title}
                          <ArrowRight
                            className="ml-2 h-4 w-4"
                            aria-hidden="true"
                          />
                        </CtaLink>
                      ) : (
                        <CtaButton
                          disabled
                          variant="outline"
                          className="w-full"
                        >
                          Coming Soon
                        </CtaButton>
                      )}
                    </CardContent>
                  </Card>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="bg-muted/30 py-12 sm:py-16"
        aria-labelledby="contact-cta-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="none" className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-cta-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
            >
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-muted-foreground mb-6">
              We work with local and international companies to provide
              necessary laboratory materials and instruments for your research.
              Contact us with your specific requirements for device development,
              laboratory supply, or target cell isolation workflows.
            </p>
            <CtaLink href="/contact">Contact Us</CtaLink>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
