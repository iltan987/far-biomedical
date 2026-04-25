import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { createDataAttribute, stegaClean } from "next-sanity";

import { FadeIn } from "@/components/motion";
import type { InstrumentData } from "@/components/products/instruments-list";
import { InstrumentsList } from "@/components/products/instruments-list";
import { Button } from "@/components/ui/button";
import { instrumentCategoryLabels } from "@/data/laboratory-instruments";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import {
  laboratoryInstrumentsPageQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import { resolveSiteSettings } from "@/sanity/lib/site-settings";
import type {
  SanityLaboratoryInstrumentsPage,
  SanitySiteSettings,
} from "@/sanity/lib/types";

type LayoutType = "list" | "2-col" | "3-col";
const VALID_LAYOUTS: LayoutType[] = ["list", "2-col", "3-col"];
const DEFAULT_LAYOUT: LayoutType = "2-col";

export const metadata: Metadata = {
  title: "Laboratory Instruments",
  description:
    "Browse our selection of high-quality laboratory instruments including centrifuges, incubators, ovens, balances, autoclaves, and more.",
  alternates: {
    canonical: "/products/laboratory-instruments",
  },
  openGraph: {
    title: "Laboratory Instruments - FAR Better Bio",
    description:
      "High-quality laboratory instruments for research and clinical applications.",
  },
};

export default async function LaboratoryInstrumentsPage() {
  const [cookieStore, { data: rawPage }, { data: rawSiteSettings }] = await Promise.all([
    cookies(),
    sanityFetch({ query: laboratoryInstrumentsPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const page = rawPage as SanityLaboratoryInstrumentsPage;
  const siteSettings = rawSiteSettings as SanitySiteSettings;
  const settings = resolveSiteSettings(siteSettings);
  const pageId = page?._id ?? "laboratoryInstrumentsPage";

  const layoutCookie = cookieStore.get("instruments-layout")?.value;
  const initialLayout =
    layoutCookie && VALID_LAYOUTS.includes(layoutCookie as LayoutType)
      ? (layoutCookie as LayoutType)
      : DEFAULT_LAYOUT;

  const defaults = {
    backButtonLabel: "Back to Products",
    heroTitle: "Laboratory Instruments",
    heroDescription:
      "Explore our comprehensive range of high-quality laboratory instruments. From centrifuges and incubators to balances and autoclaves, we provide equipment for apheresis and aferez-focused biomedical research needs.",
    heroLinkLineIntro:
      "For instrument sourcing and biomedical manufacturer collaboration requests worldwide, please",
    heroLinkLineLabel: "contact our team",
    heroLinkLineHref: "/contact",
    heroLinkLineOutro: ".",
    instrumentsSectionHeading: "Available Instruments",
    helpHeading: "Need Help Choosing?",
    helpDescription:
      "Our team can help you find the right instruments for your specific requirements. Contact us for personalized recommendations.",
    helpButtonLabel: "Contact Us",
  } as const;

  const instruments: InstrumentData[] =
    page?.instruments?.map((item, index) => ({
      _id: item.id ?? item._key ?? `instrument-${index}`,
      name: item.name ?? `Instrument ${index + 1}`,
      category: stegaClean(item.category)?.trim() || "Uncategorized",
      specifications: item.specifications ?? [],
      description: item.description ?? undefined,
      imageUrl: item.image
        ? urlFor(item.image).width(600).height(450).url()
        : undefined,
      nameAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: pageId,
        type: "laboratoryInstrumentsPage",
        path: `instruments[${index}].name`,
      }).toString(),
      categoryAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: pageId,
        type: "laboratoryInstrumentsPage",
        path: `instruments[${index}].category`,
      }).toString(),
      specificationsAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: pageId,
        type: "laboratoryInstrumentsPage",
        path: `instruments[${index}].specifications`,
      }).toString(),
      imageAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: pageId,
        type: "laboratoryInstrumentsPage",
        path: `instruments[${index}].image`,
      }).toString(),
    })) ?? [];

  const pageAttrs = {
    backButtonLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "backButtonLabel",
    }).toString(),
    heroTitle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "heroTitle",
    }).toString(),
    heroDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "heroDescription",
    }).toString(),
    heroLinkLineIntro: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "heroLinkLineIntro",
    }).toString(),
    heroLinkLineLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "heroLinkLineLabel",
    }).toString(),
    heroLinkLineOutro: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "heroLinkLineOutro",
    }).toString(),
    instrumentsSectionHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "instrumentsSectionHeading",
    }).toString(),
    helpHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "helpHeading",
    }).toString(),
    helpDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "helpDescription",
    }).toString(),
    helpButtonLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "laboratoryInstrumentsPage",
      path: "helpButtonLabel",
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
  const instrumentsSectionHeading =
    page?.instrumentsSectionHeading ?? defaults.instrumentsSectionHeading;
  const helpHeading = page?.helpHeading ?? defaults.helpHeading;
  const helpDescription = page?.helpDescription ?? defaults.helpDescription;
  const helpButtonLabel = page?.helpButtonLabel ?? defaults.helpButtonLabel;

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

      {/* Instruments List */}
      <section
        className="no-snap py-12 sm:py-16"
        aria-labelledby="instruments-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="instruments-heading"
            className="sr-only"
            data-sanity={pageAttrs.instrumentsSectionHeading}
          >
            {instrumentsSectionHeading}
          </h2>
          <InstrumentsList
            initialLayout={initialLayout}
            instruments={instruments}
            categoryLabels={instrumentCategoryLabels}
          />
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
              data-sanity={pageAttrs.helpHeading}
            >
              {helpHeading}
            </h2>
            <p
              className="text-muted-foreground mb-6"
              data-sanity={pageAttrs.helpDescription}
            >
              {helpDescription}
            </p>
            <Button
              render={<a href={`mailto:${settings.contactEmail}`} />}
              nativeButton={false}
              data-sanity={pageAttrs.helpButtonLabel}
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              {helpButtonLabel}
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
