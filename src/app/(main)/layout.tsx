import { draftMode } from "next/headers";
import { createDataAttribute } from "next-sanity";
import { VisualEditing } from "next-sanity/visual-editing";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import {
  resolveSiteSettings,
  type SiteSettingsAttrs,
} from "@/sanity/lib/site-settings";
import type { SanitySiteSettings } from "@/sanity/lib/types";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ isEnabled: isDraftMode }, { data: rawSettings }] = await Promise.all(
    [draftMode(), sanityFetch({ query: siteSettingsQuery })]
  );
  const settings = rawSettings as SanitySiteSettings;
  const siteSettings = resolveSiteSettings(settings);
  const siteSettingsId = settings?._id ?? "siteSettings";
  const dataAttrs: SiteSettingsAttrs = {
        siteName: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "siteName",
        }).toString(),
        logoText: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "logoText",
        }).toString(),
        siteDescription: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "siteDescription",
        }).toString(),
        contactEmail: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "contactEmail",
        }).toString(),
        phone: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "phone",
        }).toString(),
        addressLine1: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "addressLine1",
        }).toString(),
        linkedinUrl: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "linkedinUrl",
        }).toString(),
        instagramUrl: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "instagramUrl",
        }).toString(),
        footerCompanyHeading: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "footerCompanyHeading",
        }).toString(),
        footerProductsHeading: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "footerProductsHeading",
        }).toString(),
        footerContactHeading: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "footerContactHeading",
        }).toString(),
        footerContactLinkLabel: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "footerContactLinkLabel",
        }).toString(),
        footerCopyrightSuffix: createDataAttribute({
          projectId: "mr2294zf",
          dataset: "production",
          id: siteSettingsId,
          type: "siteSettings",
          path: "footerCopyrightSuffix",
        }).toString(),
      };

  return (
    <>
      <SiteHeader settings={siteSettings} attrs={dataAttrs} />
      <main className="flex-1">{children}</main>
      <SiteFooter settings={siteSettings} attrs={dataAttrs} />
      <SanityLive />
      {isDraftMode && <VisualEditing />}
    </>
  );
}
