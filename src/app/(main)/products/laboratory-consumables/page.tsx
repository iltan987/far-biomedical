import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { createDataAttribute } from "next-sanity";

import { FadeIn } from "@/components/motion";
import type { ConsumableData } from "@/components/products/consumables-grid";
import { ConsumablesGrid } from "@/components/products/consumables-grid";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import {
  laboratoryConsumablesPageQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import { resolveSiteSettings } from "@/sanity/lib/site-settings";
import type {
  SanityLaboratoryConsumablesPage,
  SanitySiteSettings,
} from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Laboratory Consumables",
  description:
    "Browse our selection of laboratory consumables including tubes, pipettes, slides, and storage containers.",
  alternates: {
    canonical: "/products/laboratory-consumables",
  },
  openGraph: {
    title: "Laboratory Consumables - FAR Better Bio",
    description: "Essential laboratory consumables for your research needs.",
  },
};

export default async function LaboratoryConsumablesPage() {
  const [{ data: rawPage }, { data: rawSiteSettings }] = await Promise.all([
    sanityFetch({ query: laboratoryConsumablesPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);
  const page = rawPage as SanityLaboratoryConsumablesPage;
  const siteSettings = rawSiteSettings as SanitySiteSettings;
  const settings = resolveSiteSettings(siteSettings);
  const pageId = page?._id ?? "laboratoryConsumablesPage";

  const defaults = {
    backButtonLabel: "Back to Products",
    heroTitle: "Laboratory Consumables",
    heroDescription:
      "Essential laboratory consumables for your research needs. We provide high-quality tubes, pipettes, slides, and storage containers for biomedical, PBMC, and apheresis-related workflows.",
    heroLinkLineIntro:
      "Need a custom consumables list for your biomedical workflow anywhere in the world?",
    heroLinkLineLabel: "Send your requirements",
    heroLinkLineHref: "/contact",
    heroLinkLineOutro: ".",
    consumablesSectionHeading: "Available Consumables",
    orderCtaHeading: "Ready to Order?",
    orderCtaDescription: "Submit your order by contacting us directly via email.",
    orderCtaButtonLabel: "Email Us",
  } as const;

  const consumables: ConsumableData[] =
    page?.consumables?.map((item, index) => {
      return {
        _id: item.id ?? item._key ?? `consumable-${index}`,
        name: item.name ?? `Consumable ${index + 1}`,
        description: item.description ?? undefined,
        imageUrl: item.image
          ? urlFor(item.image).width(600).height(450).url()
          : undefined,
        nameAttr: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: pageId,
          type: "laboratoryConsumablesPage",
          path: `consumables[${index}].name`,
        }).toString(),
        descriptionAttr: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: pageId,
          type: "laboratoryConsumablesPage",
          path: `consumables[${index}].description`,
        }).toString(),
        imageAttr: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: pageId,
          type: "laboratoryConsumablesPage",
          path: `consumables[${index}].image`,
        }).toString(),
      };
    }) ?? [];

  const pageAttrs = {
    backButtonLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "backButtonLabel",
    }).toString(),
    heroTitle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "heroTitle",
    }).toString(),
    heroDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "heroDescription",
    }).toString(),
    heroLinkLineIntro: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "heroLinkLineIntro",
    }).toString(),
    heroLinkLineLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "heroLinkLineLabel",
    }).toString(),
    heroLinkLineOutro: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "heroLinkLineOutro",
    }).toString(),
    consumablesSectionHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "consumablesSectionHeading",
    }).toString(),
    orderCtaHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "orderCtaHeading",
    }).toString(),
    orderCtaDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "orderCtaDescription",
    }).toString(),
    orderCtaButtonLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryConsumablesPage",
      path: "orderCtaButtonLabel",
    }).toString(),
  };

  const backButtonLabel = page?.backButtonLabel ?? defaults.backButtonLabel;
  const heroTitle = page?.heroTitle ?? defaults.heroTitle;
  const heroDescription = page?.heroDescription ?? defaults.heroDescription;
  const heroLinkLineIntro =
    page?.heroLinkLineIntro ?? defaults.heroLinkLineIntro;
  const heroLinkLineLabel =
    page?.heroLinkLineLabel ?? defaults.heroLinkLineLabel;
  const heroLinkLineHref = page?.heroLinkLineHref ?? defaults.heroLinkLineHref;
  const heroLinkLineOutro =
    page?.heroLinkLineOutro ?? defaults.heroLinkLineOutro;
  const consumablesSectionHeading =
    page?.consumablesSectionHeading ?? defaults.consumablesSectionHeading;
  const orderCtaHeading = page?.orderCtaHeading ?? defaults.orderCtaHeading;
  const orderCtaDescription =
    page?.orderCtaDescription ?? defaults.orderCtaDescription;
  const orderCtaButtonLabel =
    page?.orderCtaButtonLabel ?? defaults.orderCtaButtonLabel;

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button
              render={<Link href="/products" />}
              nativeButton={false}
              variant="ghost"
              size="sm"
              data-sanity={pageAttrs.backButtonLabel}
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              {backButtonLabel}
            </Button>
          </div>

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
            <p className="text-muted-foreground mt-3 text-sm">
              <span data-sanity={pageAttrs.heroLinkLineIntro}>
                {heroLinkLineIntro}
              </span>{" "}
              <Link
                href={heroLinkLineHref}
                className="text-primary hover:underline"
                data-sanity={pageAttrs.heroLinkLineLabel}
              >
                {heroLinkLineLabel}
              </Link>
              <span data-sanity={pageAttrs.heroLinkLineOutro}>
                {heroLinkLineOutro}
              </span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Consumables Grid */}
      <section className="py-12 sm:py-16" aria-labelledby="consumables-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="consumables-heading"
            className="sr-only"
            data-sanity={pageAttrs.consumablesSectionHeading}
          >
            {consumablesSectionHeading}
          </h2>
          <ConsumablesGrid
            consumables={consumables}
            orderEmail={settings.contactEmail}
            orderCtaHeading={orderCtaHeading}
            orderCtaDescription={orderCtaDescription}
            orderCtaButtonLabel={orderCtaButtonLabel}
            orderCtaHeadingAttr={pageAttrs.orderCtaHeading}
            orderCtaDescriptionAttr={pageAttrs.orderCtaDescription}
            orderCtaButtonLabelAttr={pageAttrs.orderCtaButtonLabel}
          />
        </div>
      </section>
    </>
  );
}
