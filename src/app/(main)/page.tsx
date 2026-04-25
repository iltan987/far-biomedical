import type { Metadata } from "next";
import { createDataAttribute, stegaClean } from "next-sanity";

import { HeroSection } from "@/components/home/hero-section";
import type { ProductData } from "@/components/home/products-overview";
import { ProductsOverview } from "@/components/home/products-overview";
import { QuoteSection } from "@/components/home/quote-section";
import type { ServiceData } from "@/components/home/services-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { getProductImageFallback } from "@/lib/product-image-fallbacks";
import { productIconMap, serviceIconMap } from "@/sanity/lib/icon-map";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import {
  productsQuery,
  servicesQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import type {
  SanityProduct,
  SanityService,
  SanitySiteSettings,
} from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "FAR Better Bio | Blood Cell Separation Technology",
  description:
    "FAR Better Bio develops advanced blood-cell separation and apheretic blood filtration technologies. Discover AutoCeive and AphereCeive platforms for research and clinical applications.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const [{ data: rawSettings }, { data: rawProducts }, { data: rawServices }] =
    await Promise.all([
      sanityFetch({ query: siteSettingsQuery }),
      sanityFetch({ query: productsQuery }),
      sanityFetch({ query: servicesQuery }),
    ]);

  const sanitySettings = rawSettings as SanitySiteSettings;
  const sanityProducts = rawProducts as SanityProduct[];
  const sanityServices = rawServices as SanityService[];
  const siteSettingsId = sanitySettings?._id ?? "siteSettings";

  const products: ProductData[] = sanityProducts.map((p) => ({
    _id: p._id,
    title: p.title,
    description: p.description,
    badge: p.badge ?? undefined,
    icon: p.iconKey ? productIconMap[stegaClean(p.iconKey)] : undefined,
    imageUrl: p.image
      ? urlFor(p.image).width(800).height(600).url()
      : getProductImageFallback(p._id) ?? getProductImageFallback(p.title),
    imageAttr: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: p._id,
      type: "product",
      path: "image",
    }).toString(),
    href: p.href ?? "/products",
  }));

  const services: ServiceData[] = sanityServices.map((s) => ({
    _id: s._id,
    title: s.title,
    description: s.description,
    icon: s.iconKey ? serviceIconMap[stegaClean(s.iconKey)] : undefined,
  }));

  const autoCeive = sanityProducts.find(
    (p) => stegaClean(p.iconKey) === "beaker",
  );

  return (
    <>
      <HeroSection
        settings={
          sanitySettings
            ? {
                ...sanitySettings,
                heroImageUrl: sanitySettings.heroImage
                  ? urlFor(sanitySettings.heroImage).width(1200).height(675).url()
                  : null,
              }
            : null
        }
        heroTitleAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "heroTitle",
        }).toString()}
        heroBadgeAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "heroBadge",
          }).toString()
        }
        heroSubtitleAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "heroSubtitle",
        }).toString()}
        heroDescriptionAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "heroDescription",
        }).toString()}
        heroImageAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "heroImage",
          }).toString()
        }
        heroPrimaryCtaAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "heroPrimaryCtaLabel",
          }).toString()
        }
        heroSecondaryCtaAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "heroSecondaryCtaLabel",
          }).toString()
        }
      />
      <ProductsOverview
        products={products}
        sectionLabel={sanitySettings?.productsLabel}
        sectionHeading={sanitySettings?.productsHeading}
        sectionDescription={sanitySettings?.productsDescription}
        calloutHeading={sanitySettings?.labSuppliesCalloutHeading}
        calloutDescription={sanitySettings?.labSuppliesCalloutDescription}
        sectionLabelAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "productsLabel",
        }).toString()}
        sectionHeadingAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "productsHeading",
        }).toString()}
        sectionDescriptionAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "productsDescription",
        }).toString()}
        calloutHeadingAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "labSuppliesCalloutHeading",
        }).toString()}
        calloutDescriptionAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "labSuppliesCalloutDescription",
        }).toString()}
        ctaButtonLabel={sanitySettings?.productsCtaLabel}
        ctaButtonLabelAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "productsCtaLabel",
          }).toString()
        }
      />
      <ServicesPreview
        services={services}
        sectionLabel={sanitySettings?.servicesLabel}
        sectionHeading={sanitySettings?.servicesHeading}
        sectionDescription={sanitySettings?.servicesDescription}
        inlineIntro={sanitySettings?.servicesInlineIntro}
        inlinePrimaryLabel={sanitySettings?.servicesInlinePrimaryLabel}
        inlinePrimaryHref={sanitySettings?.servicesInlinePrimaryHref}
        inlineMiddle={sanitySettings?.servicesInlineMiddle}
        inlineSecondaryLabel={sanitySettings?.servicesInlineSecondaryLabel}
        inlineSecondaryHref={sanitySettings?.servicesInlineSecondaryHref}
        inlineOutro={sanitySettings?.servicesInlineOutro}
        sectionLabelAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "servicesLabel",
        }).toString()}
        sectionHeadingAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "servicesHeading",
        }).toString()}
        sectionDescriptionAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "servicesDescription",
        }).toString()}
        inlineIntroAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "servicesInlineIntro",
        }).toString()}
        inlinePrimaryLabelAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "servicesInlinePrimaryLabel",
        }).toString()}
        inlineMiddleAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "servicesInlineMiddle",
        }).toString()}
        inlineSecondaryLabelAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "servicesInlineSecondaryLabel",
        }).toString()}
        inlineOutroAttr={createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "servicesInlineOutro",
        }).toString()}
        ctaButtonLabel={sanitySettings?.servicesCtaLabel}
        ctaButtonLabelAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "servicesCtaLabel",
          }).toString()
        }
        featuredProduct={
          autoCeive
            ? {
                title: autoCeive.title,
                features: autoCeive.features,
                imageUrl: autoCeive.image
                  ? urlFor(autoCeive.image).width(900).height(600).url()
                  : null,
                imageAttr: createDataAttribute({
                  projectId: "mr2294zf",
                  dataset: "production",
                  id: autoCeive._id,
                  type: "product",
                  path: "image",
                }).toString(),
              }
            : null
        }
      />
      <QuoteSection
        quoteText={sanitySettings?.quoteText}
        quoteAttribution={sanitySettings?.quoteAttribution}
        ctaHeading={sanitySettings?.quoteCtaHeading}
        ctaDescription={sanitySettings?.quoteCtaDescription}
        ctaButtonLabel={sanitySettings?.quoteCtaButtonLabel}
        quoteTextAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "quoteText",
          }).toString()
        }
        quoteAttributionAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "quoteAttribution",
          }).toString()
        }
        ctaHeadingAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "quoteCtaHeading",
          }).toString()
        }
        ctaDescriptionAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "quoteCtaDescription",
          }).toString()
        }
        ctaButtonLabelAttr={
          createDataAttribute({
            projectId: "mr2294zf",
            dataset: "production",
            id: siteSettingsId,
            type: "siteSettings",
            path: "quoteCtaButtonLabel",
          }).toString()
        }
      />
    </>
  );
}
