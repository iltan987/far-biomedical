import { ArrowRight, Beaker, FlaskConical, Package } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createDataAttribute, stegaClean } from "next-sanity";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { productsPageQuery, productsQuery } from "@/sanity/lib/queries";
import type {
  SanityImage,
  SanityProduct,
  SanityProductsPage,
} from "@/sanity/lib/types";

type ProductsPageCategory = {
  _key?: string;
  id?: string | null;
  title?: string | null;
  description?: string | null;
  iconKey?: string | null;
  badge?: string | null;
  href?: string | null;
  ctaLabel?: string | null;
  image?: SanityImage;
};

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore FAR Better Bio's laboratory instruments, consumables, and upcoming AutoCeive cell separation device.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products - FAR Better Bio",
    description: "Laboratory instruments and consumables for research.",
  },
};

const DEFAULTS = {
  heroTitle: "Our Products",
  heroDescription:
    "From our innovative cell separation devices to a comprehensive range of laboratory equipment and consumables, we provide everything you need for your research.",
  productCategories: [
    {
      id: "autoceive",
      title: "AutoCeive",
      description:
        "Our flagship benchtop blood cell separation device using high-gradient magnetic separation. Fully automated processing for research laboratories.",
      iconKey: "beaker",
      badge: "Coming Soon",
      ctaLabel: "Coming Soon",
    },
    {
      id: "laboratory-instruments",
      title: "Laboratory Instruments",
      description:
        "Browse our selection of high-quality laboratory instruments including centrifuges, incubators, ovens, balances, and more.",
      iconKey: "flask-conical",
      href: "/products/laboratory-instruments",
      ctaLabel: "Browse Laboratory Instruments",
    },
    {
      id: "laboratory-consumables",
      title: "Laboratory Consumables",
      description:
        "Essential laboratory consumables including tubes, pipettes, slides, and storage containers for your research needs.",
      iconKey: "package",
      href: "/products/laboratory-consumables",
      ctaLabel: "Browse Laboratory Consumables",
    },
  ] satisfies ProductsPageCategory[],
  contactHeading: "Can't Find What You Need?",
  contactDescription:
    "We work with local and international companies to provide necessary laboratory materials and instruments for your research. Contact us with your specific requirements.",
  contactButtonLabel: "Contact Us",
  contactButtonHref: "/contact",
};

const categoryIconMap = {
  beaker: Beaker,
  "flask-conical": FlaskConical,
  package: Package,
} as const;

export default async function ProductsPage() {
  const [{ data: rawPage }, { data: rawProducts }] = await Promise.all([
    sanityFetch({ query: productsPageQuery }),
    sanityFetch({ query: productsQuery }),
  ]);

  const productsPage = rawPage as SanityProductsPage;
  const products = rawProducts as SanityProduct[];
  const productsPageId = productsPage?._id ?? "productsPage";
  const productsById = new Map(
    products.map((product) => [
      stegaClean(product._id).replace(/^product-/, ""),
      product,
    ])
  );

  const pageAttrs = {
    heroTitle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: productsPageId,
      type: "productsPage",
      path: "heroTitle",
    }).toString(),
    heroDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: productsPageId,
      type: "productsPage",
      path: "heroDescription",
    }).toString(),
    contactHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: productsPageId,
      type: "productsPage",
      path: "contactHeading",
    }).toString(),
    contactDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: productsPageId,
      type: "productsPage",
      path: "contactDescription",
    }).toString(),
    contactButtonLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: productsPageId,
      type: "productsPage",
      path: "contactButtonLabel",
    }).toString(),
  };

  const heroTitle = productsPage?.heroTitle ?? DEFAULTS.heroTitle;
  const heroDescription =
    productsPage?.heroDescription ?? DEFAULTS.heroDescription;
  const categoriesSource: ProductsPageCategory[] =
    productsPage?.productCategories?.length
      ? productsPage.productCategories
      : DEFAULTS.productCategories;
  const contactHeading = productsPage?.contactHeading ?? DEFAULTS.contactHeading;
  const contactDescription =
    productsPage?.contactDescription ?? DEFAULTS.contactDescription;
  const contactButtonLabel =
    productsPage?.contactButtonLabel ?? DEFAULTS.contactButtonLabel;
  const contactButtonHref =
    productsPage?.contactButtonHref ?? DEFAULTS.contactButtonHref;

  const productCategories = categoriesSource.map((category, index) => {
    const linkedProduct = category.id
      ? productsById.get(stegaClean(category.id))
      : undefined;
    const iconKey = stegaClean(linkedProduct?.iconKey ?? category.iconKey ?? "");
    const title = linkedProduct?.title ?? category.title ?? "";
    const description =
      linkedProduct?.longDescription ??
      linkedProduct?.description ??
      category.description ??
      "";
    const badge = linkedProduct?.badge ?? category.badge ?? undefined;
    const isComingSoon = (category.ctaLabel ?? badge ?? "")
      .toLowerCase()
      .includes("coming soon");
    const href = isComingSoon
      ? category.href ?? undefined
      : category.href ?? linkedProduct?.href ?? undefined;
    const ctaLabel =
      category.ctaLabel ??
      (href ? `Browse ${title}` : badge ?? "Coming Soon");
    const imageSource = linkedProduct?.image ?? category.image;

    return {
      _key: category._key ?? category.id ?? `product-category-${index}`,
      title,
      description,
      badge,
      href,
      ctaLabel,
      imageUrl: imageSource
        ? urlFor(imageSource).width(800).height(600).url()
        : undefined,
      icon:
        categoryIconMap[iconKey as keyof typeof categoryIconMap] ?? Package,
      titleAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: productsPageId,
        type: "productsPage",
        path: `productCategories[${index}].title`,
      }).toString(),
      descriptionAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: productsPageId,
        type: "productsPage",
        path: `productCategories[${index}].description`,
      }).toString(),
      badgeAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: productsPageId,
        type: "productsPage",
        path: `productCategories[${index}].badge`,
      }).toString(),
      ctaLabelAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: productsPageId,
        type: "productsPage",
        path: `productCategories[${index}].ctaLabel`,
      }).toString(),
      imageAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: productsPageId,
        type: "productsPage",
        path: `productCategories[${index}].image`,
      }).toString(),
    };
  });

  return (
    <>
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              data-sanity={pageAttrs.heroTitle}
            >
              {heroTitle}
            </h1>
            <p
              className="text-muted-foreground mt-4 text-lg leading-relaxed"
              data-sanity={pageAttrs.heroDescription}
            >
              {heroDescription}
            </p>
          </FadeIn>
        </div>
      </section>

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
              <FadeIn key={category._key} delay={index * 0.1} className="h-full">
                <article role="listitem" className="h-full">
                  <Card className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative overflow-hidden" data-sanity={category.imageAttr}>
                      {category.imageUrl ? (
                        <div className="relative aspect-4/3">
                          <Image
                            src={category.imageUrl}
                            alt={category.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <ImagePlaceholder
                          aspectRatio="4/3"
                          className="rounded-none transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
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
                          <Badge variant="secondary" data-sanity={category.badgeAttr}>
                            {category.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="mt-4 text-xl" data-sanity={category.titleAttr}>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex grow flex-col">
                      <CardDescription
                        className="mb-4 grow text-base"
                        data-sanity={category.descriptionAttr}
                      >
                        {category.description}
                      </CardDescription>
                      {category.href ? (
                        <Button
                          render={<Link href={category.href} />}
                          nativeButton={false}
                          variant="outline"
                          className="w-full"
                          data-sanity={category.ctaLabelAttr}
                        >
                          {category.ctaLabel ?? `Browse ${category.title}`}
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Button>
                      ) : (
                        <Button
                          disabled
                          variant="outline"
                          className="w-full"
                          data-sanity={category.ctaLabelAttr}
                        >
                          {category.ctaLabel ?? category.badge ?? "Coming Soon"}
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-muted/30 py-12 sm:py-16"
        aria-labelledby="contact-cta-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="none" className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-cta-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
              data-sanity={pageAttrs.contactHeading}
            >
              {contactHeading}
            </h2>
            <p
              className="text-muted-foreground mb-6"
              data-sanity={pageAttrs.contactDescription}
            >
              {contactDescription}
            </p>
            <Button
              render={<Link href={contactButtonHref} />}
              nativeButton={false}
              data-sanity={pageAttrs.contactButtonLabel}
            >
              {contactButtonLabel}
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
