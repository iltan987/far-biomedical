import { stegaClean } from "next-sanity";
import { cache } from "react";

import { client } from "./client";
import { siteSettingsQuery } from "./queries";
import type { SanitySiteSettings } from "./types";

export type ResolvedSiteSettings = {
  siteName: string;
  logoText: string;
  siteDescription: string;
  locationName: string;
  googleMapsEmbedUrl: string;
  googleMapsOpenUrl: string;
  googleMapsDirectionsUrl: string;
  contactEmail: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  postalCode: string;
  linkedinUrl: string;
  instagramUrl: string;
  footerCompanyHeading: string;
  footerProductsHeading: string;
  footerContactHeading: string;
  footerContactLinkLabel: string;
  footerCopyrightSuffix: string;
};

export type SiteSettingsAttrs = {
  siteName?: string;
  logoText?: string;
  siteDescription?: string;
  contactEmail?: string;
  phone?: string;
  addressLine1?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  footerCompanyHeading?: string;
  footerProductsHeading?: string;
  footerContactHeading?: string;
  footerContactLinkLabel?: string;
  footerCopyrightSuffix?: string;
};

const DEFAULT_SITE_SETTINGS: ResolvedSiteSettings = {
  siteName: "FAR Better Bio",
  logoText: "FAR Better",
  siteDescription:
    "Advanced blood-cell separation and apheretic blood filtration technologies",
  locationName: "ODTÜ Bilim ve İnovasyon Merkezi",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.7938467854915!2d32.748980826364466!3d39.90746193280172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d5026bfabf%3A0x12ff20e2b9024f49!2sODT%C3%9C%20Bilim%20ve%20%C4%B0novasyon%20Merkezi!5e0!3m2!1str!2str!4v1766090275981!5m2!1str!2str",
  googleMapsOpenUrl: "https://maps.app.goo.gl/sS2FzQWZ4yLP9pHn9",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=39.9077973,32.7499313&destination_place_id=7Pcq5CSbxnNM2Jqt8",
  contactEmail: "farbiomedical@gmail.com",
  phone: "+90 555 081 35 08",
  addressLine1: "ODTÜ Bilim ve İnovasyon Merkezi, Cozone",
  addressLine2: "Mustafa Kemal Mahallesi, Çankaya",
  city: "Ankara",
  country: "Turkey",
  postalCode: "06510",
  linkedinUrl: "https://www.linkedin.com/in/farbetterbio",
  instagramUrl: "https://www.instagram.com/farbetterbio",
  footerCompanyHeading: "Company",
  footerProductsHeading: "Products",
  footerContactHeading: "Contact",
  footerContactLinkLabel: "Contact Us",
  footerCopyrightSuffix: "All rights reserved.",
};

function pickString(
  value: string | null | undefined,
  fallback: string
): string {
  const cleaned = stegaClean(value ?? "");
  return cleaned || fallback;
}

export function resolveSiteSettings(
  settings: SanitySiteSettings
): ResolvedSiteSettings {
  return {
    siteName: pickString(settings?.siteName, DEFAULT_SITE_SETTINGS.siteName),
    logoText: pickString(settings?.logoText, DEFAULT_SITE_SETTINGS.logoText),
    siteDescription: pickString(
      settings?.siteDescription,
      DEFAULT_SITE_SETTINGS.siteDescription
    ),
    locationName: pickString(
      settings?.locationName,
      DEFAULT_SITE_SETTINGS.locationName
    ),
    googleMapsEmbedUrl: pickString(
      settings?.googleMapsEmbedUrl,
      DEFAULT_SITE_SETTINGS.googleMapsEmbedUrl
    ),
    googleMapsOpenUrl: pickString(
      settings?.googleMapsOpenUrl,
      DEFAULT_SITE_SETTINGS.googleMapsOpenUrl
    ),
    googleMapsDirectionsUrl: pickString(
      settings?.googleMapsDirectionsUrl,
      DEFAULT_SITE_SETTINGS.googleMapsDirectionsUrl
    ),
    contactEmail: pickString(
      settings?.contactEmail,
      DEFAULT_SITE_SETTINGS.contactEmail
    ),
    phone: pickString(settings?.phone, DEFAULT_SITE_SETTINGS.phone),
    addressLine1: pickString(
      settings?.addressLine1,
      DEFAULT_SITE_SETTINGS.addressLine1
    ),
    addressLine2: pickString(
      settings?.addressLine2,
      DEFAULT_SITE_SETTINGS.addressLine2
    ),
    city: pickString(settings?.city, DEFAULT_SITE_SETTINGS.city),
    country: pickString(settings?.country, DEFAULT_SITE_SETTINGS.country),
    postalCode: pickString(
      settings?.postalCode,
      DEFAULT_SITE_SETTINGS.postalCode
    ),
    linkedinUrl: pickString(
      settings?.linkedinUrl,
      DEFAULT_SITE_SETTINGS.linkedinUrl
    ),
    instagramUrl: pickString(
      settings?.instagramUrl,
      DEFAULT_SITE_SETTINGS.instagramUrl
    ),
    footerCompanyHeading: pickString(
      settings?.footerCompanyHeading,
      DEFAULT_SITE_SETTINGS.footerCompanyHeading
    ),
    footerProductsHeading: pickString(
      settings?.footerProductsHeading,
      DEFAULT_SITE_SETTINGS.footerProductsHeading
    ),
    footerContactHeading: pickString(
      settings?.footerContactHeading,
      DEFAULT_SITE_SETTINGS.footerContactHeading
    ),
    footerContactLinkLabel: pickString(
      settings?.footerContactLinkLabel,
      DEFAULT_SITE_SETTINGS.footerContactLinkLabel
    ),
    footerCopyrightSuffix: pickString(
      settings?.footerCopyrightSuffix,
      DEFAULT_SITE_SETTINGS.footerCopyrightSuffix
    ),
  };
}

export const getSiteSettings = cache(
  async (): Promise<ResolvedSiteSettings> => {
    const settings = (await client.fetch(
      siteSettingsQuery
    )) as SanitySiteSettings;
    return resolveSiteSettings(settings);
  }
);
