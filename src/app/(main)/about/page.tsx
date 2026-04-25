import { Building2, Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createDataAttribute, stegaClean } from "next-sanity";

import { AnimatedLogo } from "@/components/animated-logo";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductImageFallback } from "@/lib/product-image-fallbacks";
import { productIconMap } from "@/sanity/lib/icon-map";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import {
  aboutPageQuery,
  productsQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import { resolveSiteSettings } from "@/sanity/lib/site-settings";
import type {
  SanityAboutPage,
  SanityProduct,
  SanitySiteSettings,
} from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FAR Better Bio, an R&D company at METU Teknokent developing AutoCeive and AphereCeive blood cell separation technologies.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About FAR Better Bio",
    description:
      "Learn about our mission to advance blood-cell separation technology.",
  },
};

const DEFAULTS = {
  heroTitle: "About Us",
  heroDescription:
    "FAR Better Bio is an R&D company developing advanced blood-cell separation and apheretic blood filtration technologies.",
  heroLinkLineIntro: "Explore our",
  heroLinkLinePrimaryLabel: "apheresis-focused product roadmap",
  heroLinkLinePrimaryHref: "/products",
  heroLinkLineMiddle: "and",
  heroLinkLineSecondaryLabel: "target cell isolation services",
  heroLinkLineSecondaryHref: "/services",
  heroLinkLineOutro:
    "to see how our R&D in Turkiye translates into practical global workflows.",
  corePlatformsHeading: "Our Core Platforms",
  locationsHeading: "Our Locations",
  locationsDescription:
    "Our R&D operations are based in METU Teknokent and METU Research Center (BIOMATEN), where we collaborate with multidisciplinary engineers and scientists.",
  locationOneName: "METU Teknokent",
  locationOneDescription: "Middle East Technical University Technopark",
  locationTwoName: "BIOMATEN",
  locationTwoDescription: "METU Research Center",
  researchHeading: "Supporting Research Excellence",
  researchDescription:
    "In addition to our core research, we actively distribute laboratory devices, consumables, and materials for supporting our R&D pipeline, by ensuring access to cutting-edge instruments and high-quality materials.",
  researchPrimaryCtaLabel: "Browse Instruments",
  researchPrimaryCtaHref: "/products/laboratory-instruments",
  researchSecondaryCtaLabel: "Browse Consumables",
  researchSecondaryCtaHref: "/products/laboratory-consumables",
  contactHeading: "Get in Touch",
  contactDescription:
    "Have questions about our technology or services? We'd love to hear from you.",
  contactButtonLabel: "Contact Us",
};

export default async function AboutPage() {
  const [{ data: rawAboutPage }, { data: rawProducts }, { data: rawSettings }] =
    await Promise.all([
      sanityFetch({ query: aboutPageQuery }),
      sanityFetch({ query: productsQuery }),
      sanityFetch({ query: siteSettingsQuery }),
    ]);

  const aboutPage = rawAboutPage as SanityAboutPage;
  const products = (rawProducts as SanityProduct[]).slice(0, 3);
  const sanitySettings = rawSettings as SanitySiteSettings;
  const settings = resolveSiteSettings(sanitySettings);
  const aboutPageId = aboutPage?._id ?? "aboutPage";
  const siteSettingsId = sanitySettings?._id ?? "siteSettings";

  const pageAttrs = {
        heroTitle: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "heroTitle",
        }).toString(),
        heroDescription: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "heroDescription",
        }).toString(),
        heroLinkLineIntro: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "heroLinkLineIntro",
        }).toString(),
        heroLinkLinePrimaryLabel: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "heroLinkLinePrimaryLabel",
        }).toString(),
        heroLinkLineMiddle: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "heroLinkLineMiddle",
        }).toString(),
        heroLinkLineSecondaryLabel: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "heroLinkLineSecondaryLabel",
        }).toString(),
        heroLinkLineOutro: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "heroLinkLineOutro",
        }).toString(),
        heroImage: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "heroImage",
        }).toString(),
        corePlatformsHeading: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "corePlatformsHeading",
        }).toString(),
        locationsHeading: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "locationsHeading",
        }).toString(),
        locationsDescription: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "locationsDescription",
        }).toString(),
        locationOneName: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "locationOneName",
        }).toString(),
        locationOneDescription: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "locationOneDescription",
        }).toString(),
        locationOneImage: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "locationOneImage",
        }).toString(),
        locationTwoName: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "locationTwoName",
        }).toString(),
        locationTwoDescription: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "locationTwoDescription",
        }).toString(),
        locationTwoImage: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "locationTwoImage",
        }).toString(),
        researchHeading: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "researchHeading",
        }).toString(),
        researchDescription: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "researchDescription",
        }).toString(),
        researchPrimaryCtaLabel: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "researchPrimaryCtaLabel",
        }).toString(),
        researchSecondaryCtaLabel: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "researchSecondaryCtaLabel",
        }).toString(),
        contactHeading: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "contactHeading",
        }).toString(),
        contactDescription: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "contactDescription",
        }).toString(),
        contactButtonLabel: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: aboutPageId,
          type: "aboutPage",
          path: "contactButtonLabel",
        }).toString(),
      };

  const siteAttrs = {
        contactEmail: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "contactEmail",
        }).toString(),
      };

  const platforms = products.map((product) => ({
    _id: product._id,
    title: product.title,
    description: product.longDescription ?? product.description,
    imageUrl: product.image
      ? urlFor(product.image).width(800).height(600).url()
      : getProductImageFallback(product._id) ??
        getProductImageFallback(product.title),
    icon: product.iconKey
      ? productIconMap[stegaClean(product.iconKey)]
      : undefined,
    titleAttr: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: product._id,
      type: "product",
      path: "title",
    }).toString(),
    descriptionAttr: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: product._id,
      type: "product",
      path: product.longDescription ? "longDescription" : "description",
    }).toString(),
    imageAttr: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: product._id,
      type: "product",
      path: "image",
    }).toString(),
  }));

  const heroTitle = aboutPage?.heroTitle ?? DEFAULTS.heroTitle;
  const heroDescription =
    aboutPage?.heroDescription ?? DEFAULTS.heroDescription;
  const heroLinkLineIntro =
    aboutPage?.heroLinkLineIntro ?? DEFAULTS.heroLinkLineIntro;
  const heroLinkLinePrimaryLabel =
    aboutPage?.heroLinkLinePrimaryLabel ?? DEFAULTS.heroLinkLinePrimaryLabel;
  const heroLinkLinePrimaryHref =
    aboutPage?.heroLinkLinePrimaryHref ?? DEFAULTS.heroLinkLinePrimaryHref;
  const heroLinkLineMiddle =
    aboutPage?.heroLinkLineMiddle ?? DEFAULTS.heroLinkLineMiddle;
  const heroLinkLineSecondaryLabel =
    aboutPage?.heroLinkLineSecondaryLabel ?? DEFAULTS.heroLinkLineSecondaryLabel;
  const heroLinkLineSecondaryHref =
    aboutPage?.heroLinkLineSecondaryHref ?? DEFAULTS.heroLinkLineSecondaryHref;
  const heroLinkLineOutro =
    aboutPage?.heroLinkLineOutro ?? DEFAULTS.heroLinkLineOutro;
  const heroImageUrl = aboutPage?.heroImage
    ? urlFor(aboutPage.heroImage).width(900).height(900).url()
    : null;
  const corePlatformsHeading =
    aboutPage?.corePlatformsHeading ?? DEFAULTS.corePlatformsHeading;
  const locationsHeading =
    aboutPage?.locationsHeading ?? DEFAULTS.locationsHeading;
  const locationsDescription =
    aboutPage?.locationsDescription ?? DEFAULTS.locationsDescription;
  const locationOneName =
    aboutPage?.locationOneName ?? DEFAULTS.locationOneName;
  const locationOneDescription =
    aboutPage?.locationOneDescription ?? DEFAULTS.locationOneDescription;
  const locationTwoName =
    aboutPage?.locationTwoName ?? DEFAULTS.locationTwoName;
  const locationTwoDescription =
    aboutPage?.locationTwoDescription ?? DEFAULTS.locationTwoDescription;
  const locationOneImageUrl = aboutPage?.locationOneImage
    ? urlFor(aboutPage.locationOneImage).width(1200).height(675).url()
    : null;
  const locationTwoImageUrl = aboutPage?.locationTwoImage
    ? urlFor(aboutPage.locationTwoImage).width(1200).height(675).url()
    : null;
  const researchHeading =
    aboutPage?.researchHeading ?? DEFAULTS.researchHeading;
  const researchDescription =
    aboutPage?.researchDescription ?? DEFAULTS.researchDescription;
  const researchPrimaryCtaLabel =
    aboutPage?.researchPrimaryCtaLabel ?? DEFAULTS.researchPrimaryCtaLabel;
  const researchPrimaryCtaHref =
    aboutPage?.researchPrimaryCtaHref ?? DEFAULTS.researchPrimaryCtaHref;
  const researchSecondaryCtaLabel =
    aboutPage?.researchSecondaryCtaLabel ?? DEFAULTS.researchSecondaryCtaLabel;
  const researchSecondaryCtaHref =
    aboutPage?.researchSecondaryCtaHref ?? DEFAULTS.researchSecondaryCtaHref;
  const contactHeading = aboutPage?.contactHeading ?? DEFAULTS.contactHeading;
  const contactDescription =
    aboutPage?.contactDescription ?? DEFAULTS.contactDescription;
  const contactButtonLabel =
    aboutPage?.contactButtonLabel ?? DEFAULTS.contactButtonLabel;

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
            <FadeIn className="text-center md:text-left">
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
              <p className="text-muted-foreground mt-3 text-base">
                <span data-sanity={pageAttrs.heroLinkLineIntro}>
                  {heroLinkLineIntro}
                </span>{" "}
                <Link
                  href={heroLinkLinePrimaryHref}
                  className="text-primary hover:underline"
                  data-sanity={pageAttrs.heroLinkLinePrimaryLabel}
                >
                  {heroLinkLinePrimaryLabel}
                </Link>{" "}
                <span data-sanity={pageAttrs.heroLinkLineMiddle}>
                  {heroLinkLineMiddle}
                </span>{" "}
                <Link
                  href={heroLinkLineSecondaryHref}
                  className="text-primary hover:underline"
                  data-sanity={pageAttrs.heroLinkLineSecondaryLabel}
                >
                  {heroLinkLineSecondaryLabel}
                </Link>{" "}
                <span data-sanity={pageAttrs.heroLinkLineOutro}>
                  {heroLinkLineOutro}
                </span>
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div data-sanity={pageAttrs.heroImage}>
                <AnimatedLogo
                  src={heroImageUrl ?? undefined}
                  alt={heroTitle}
                  containerClassName="mx-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Platforms */}
      <section className="py-12 sm:py-16" aria-labelledby="platforms-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              id="platforms-heading"
              className="mb-12 text-center text-2xl font-bold sm:text-3xl"
              data-sanity={pageAttrs.corePlatformsHeading}
            >
              {corePlatformsHeading}
            </h2>
          </FadeIn>
          <div
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            role="list"
          >
            {platforms.map((platform, index) => (
              <FadeIn key={platform._id} delay={index * 0.1} className="h-full">
                <article role="listitem" className="h-full">
                  <Card className="group hover:border-primary/50 focus-within:ring-ring h-full overflow-hidden border-2 transition-colors focus-within:ring-2">
                    {/* Platform Image */}
                    <div
                      className="relative aspect-4/3 overflow-hidden"
                      data-sanity={platform.imageAttr}
                    >
                      {platform.imageUrl ? (
                        <Image
                          src={platform.imageUrl}
                          alt={platform.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <ImagePlaceholder
                          aspectRatio="4/3"
                          className="rounded-none transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <CardContent className="px-6 pt-6 pb-4">
                      {platform.icon && (
                        <div
                          className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                          aria-hidden="true"
                        >
                          <platform.icon className="h-6 w-6" />
                        </div>
                      )}
                      <h3
                        className="mb-2 text-xl font-semibold"
                        data-sanity={platform.titleAttr}
                      >
                        {platform.title}™
                      </h3>
                      <p
                        className="text-muted-foreground"
                        data-sanity={platform.descriptionAttr}
                      >
                        {platform.description}
                      </p>
                    </CardContent>
                  </Card>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section
        className="bg-muted/30 py-12 sm:py-16"
        aria-labelledby="locations-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn direction="none">
              <h2
                id="locations-heading"
                className="mb-8 text-center text-2xl font-bold sm:text-3xl"
                data-sanity={pageAttrs.locationsHeading}
              >
                {locationsHeading}
              </h2>
              <p
                className="text-muted-foreground mb-8 text-center"
                data-sanity={pageAttrs.locationsDescription}
              >
                {locationsDescription}
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FadeIn>
                <article className="group bg-card overflow-hidden rounded-xl border">
                  <div data-sanity={pageAttrs.locationOneImage}>
                    {locationOneImageUrl ? (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={locationOneImageUrl}
                          alt={locationOneName}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        aspectRatio="video"
                        className="rounded-none transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex items-start gap-3 p-4">
                    <Building2
                      className="text-primary mt-0.5 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <h3
                        className="font-semibold"
                        data-sanity={pageAttrs.locationOneName}
                      >
                        {locationOneName}
                      </h3>
                      <p
                        className="text-muted-foreground text-sm"
                        data-sanity={pageAttrs.locationOneDescription}
                      >
                        {locationOneDescription}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
              <FadeIn>
                <article className="group bg-card overflow-hidden rounded-xl border">
                  <div
                    className="relative aspect-video overflow-hidden"
                    data-sanity={pageAttrs.locationTwoImage}
                  >
                    {locationTwoImageUrl ? (
                      <Image
                        src={locationTwoImageUrl}
                        alt={locationTwoName}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <ImagePlaceholder
                        aspectRatio="video"
                        className="rounded-none transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex items-start gap-3 p-4">
                    <Building2
                      className="text-primary mt-0.5 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <h3
                        className="font-semibold"
                        data-sanity={pageAttrs.locationTwoName}
                      >
                        {locationTwoName}
                      </h3>
                      <p
                        className="text-muted-foreground text-sm"
                        data-sanity={pageAttrs.locationTwoDescription}
                      >
                        {locationTwoDescription}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Business */}
      <section className="py-12 sm:py-16" aria-labelledby="research-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2
              id="research-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
              data-sanity={pageAttrs.researchHeading}
            >
              {researchHeading}
            </h2>
            <p
              className="text-muted-foreground mb-8"
              data-sanity={pageAttrs.researchDescription}
            >
              {researchDescription}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                render={<Link href={researchPrimaryCtaHref} />}
                nativeButton={false}
                data-sanity={pageAttrs.researchPrimaryCtaLabel}
              >
                {researchPrimaryCtaLabel}
              </Button>
              <Button
                render={<Link href={researchSecondaryCtaHref} />}
                nativeButton={false}
                variant="outline"
                data-sanity={pageAttrs.researchSecondaryCtaLabel}
              >
                {researchSecondaryCtaLabel}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="bg-primary text-primary-foreground py-12 sm:py-16"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="none" className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
              data-sanity={pageAttrs.contactHeading}
            >
              {contactHeading}
            </h2>
            <p
              className="mb-6 opacity-90"
              data-sanity={pageAttrs.contactDescription}
            >
              {contactDescription}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${settings.contactEmail}`}
                data-sanity={siteAttrs.contactEmail}
                className="text-primary-foreground/90 hover:text-primary-foreground flex items-center gap-2"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {settings.contactEmail}
              </a>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                variant="secondary"
                className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
                data-sanity={pageAttrs.contactButtonLabel}
              >
                {contactButtonLabel}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
