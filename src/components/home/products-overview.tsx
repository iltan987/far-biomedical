import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import { CtaLink } from "@/components/site/cta-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ProductData = {
  _id: string;
  title: string;
  description: string;
  badge?: string;
  icon?: LucideIcon;
  imageUrl?: string | StaticImageData;
  imageAttr?: string;
  href: string;
};

const DEFAULTS = {
  sectionLabel: "FAR: Filtrate Alternate Return",
  sectionHeading: "Cell-Targeted Blood Processing",
  sectionDescription:
    "Our long-term goal is to build cell-targeted blood filtration and processing devices engineered for advanced apheresis and gene therapies.",
  calloutHeading: "Looking for laboratory supplies?",
  calloutDescription:
    "We work with local and international companies to provide laboratory materials and instruments.",
};

type Props = {
  products: ProductData[];
  sectionLabel?: string | null;
  sectionHeading?: string | null;
  sectionDescription?: string | null;
  calloutHeading?: string | null;
  calloutDescription?: string | null;
  sectionLabelAttr?: string;
  sectionHeadingAttr?: string;
  sectionDescriptionAttr?: string;
  calloutHeadingAttr?: string;
  calloutDescriptionAttr?: string;
  ctaButtonLabel?: string | null;
  ctaButtonLabelAttr?: string;
};

export function ProductsOverview({
  products,
  sectionLabel,
  sectionHeading,
  sectionDescription,
  calloutHeading,
  calloutDescription,
  sectionLabelAttr,
  sectionHeadingAttr,
  sectionDescriptionAttr,
  calloutHeadingAttr,
  calloutDescriptionAttr,
  ctaButtonLabel,
  ctaButtonLabelAttr,
}: Props) {
  const label = sectionLabel ?? DEFAULTS.sectionLabel;
  const heading = sectionHeading ?? DEFAULTS.sectionHeading;
  const description = sectionDescription ?? DEFAULTS.sectionDescription;
  const ctaHeading = calloutHeading ?? DEFAULTS.calloutHeading;
  const ctaDescription = calloutDescription ?? DEFAULTS.calloutDescription;
  const ctaLabel = ctaButtonLabel ?? "Browse Products";

  return (
    <section
      id="products-overview"
      className="bg-muted/30 py-16 sm:py-24 lg:py-32"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2
            className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase"
            data-sanity={sectionLabelAttr}
          >
            {label}
          </h2>
          <p
            id="products-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            data-sanity={sectionHeadingAttr}
          >
            {heading}
          </p>
          <p
            className="text-muted-foreground mt-4 text-lg"
            data-sanity={sectionDescriptionAttr}
          >
            {description}
          </p>
        </FadeIn>

        {/* Product Cards */}
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4"
          role="list"
        >
          {products.map((product, index) => (
            <FadeIn key={product._id} delay={index * 0.1} className="h-full">
              <article role="listitem" className="h-full">
                <Card className="group focus-within:ring-ring relative h-full overflow-hidden transition-all duration-300 focus-within:ring-2 hover:-translate-y-1 hover:shadow-lg">
                  {/* Product Image */}
                  <div
                    className="relative aspect-4/3 overflow-hidden"
                    data-sanity={product.imageAttr}
                  >
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <ImagePlaceholder
                        aspectRatio="4/3"
                        className="rounded-none transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      {product.icon && (
                        <div
                          className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg"
                          aria-hidden="true"
                        >
                          <product.icon className="h-6 w-6" />
                        </div>
                      )}
                      {product.badge && (
                        <Badge variant="secondary">{product.badge}</Badge>
                      )}
                    </div>
                    <CardTitle className="mt-4 text-xl">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Additional Products CTA */}
        <FadeIn direction="none" className="mt-12 text-center lg:mt-16">
          <div className="bg-card inline-flex flex-col items-center justify-center gap-4 rounded-2xl border p-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-semibold" data-sanity={calloutHeadingAttr}>
                {ctaHeading}
              </p>
              <p
                className="text-muted-foreground text-sm"
                data-sanity={calloutDescriptionAttr}
              >
                {ctaDescription}
              </p>
            </div>
            <CtaLink
              href="/products/laboratory-instruments"
              variant="default"
              className="shrink-0"
              data-sanity={ctaButtonLabelAttr}
            >
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </CtaLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
