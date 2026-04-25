import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { createDataAttribute } from "next-sanity";

import { ContactForm } from "@/components/contact/contact-form";
import { GoogleMap } from "@/components/contact/google-map";
import { FadeIn } from "@/components/motion";
import { sanityFetch } from "@/sanity/lib/live";
import { contactPageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { resolveSiteSettings } from "@/sanity/lib/site-settings";
import type { SanityContactPage, SanitySiteSettings } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FAR Better Bio. Located at METU Teknokent, Ankara, Turkey. Contact us for laboratory services and products.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact FAR Better Bio",
    description: "Reach out to our team for inquiries and support.",
  },
};

export default async function ContactPage() {
  const [{ data: rawContactPage }, { data: rawSiteSettings }] =
    await Promise.all([
      sanityFetch({ query: contactPageQuery }),
      sanityFetch({ query: siteSettingsQuery }),
    ]);
  const contactPage = rawContactPage as SanityContactPage;
  const siteSettings = rawSiteSettings as SanitySiteSettings;
  const settings = resolveSiteSettings(siteSettings);
  const pageId = contactPage?._id ?? "contactPage";
  const siteSettingsId = siteSettings?._id ?? "siteSettings";

  const defaults = {
    heroTitle: "Contact Us",
    heroDescription:
      "Have questions? We’d love to hear from you. Get in touch with our team for inquiries about our apheresis and aferez-focused",
    heroLinkLinePrimaryLabel: "product programs",
    heroLinkLinePrimaryHref: "https://www.farbetterbio.com/products",
    heroLinkLineMiddle: "and",
    heroLinkLineSecondaryLabel: "cell isolation services",
    heroLinkLineSecondaryHref: "https://www.farbetterbio.com/services",
    mainHeading: "Contact Details",
    formHeading: "Send Us a Message",
    contactInfoHeading: "Contact Information",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Address",
    locationHeading: "Our Location",
    openMapLabel: "Open Map",
    directionsLabel: "Directions",
  } as const;

  const pageAttrs = {
    heroTitle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "heroTitle",
    }).toString(),
    heroDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "heroDescription",
    }).toString(),
    heroLinkLinePrimaryLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "heroLinkLinePrimaryLabel",
    }).toString(),
    heroLinkLinePrimaryHref: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "heroLinkLinePrimaryHref",
    }).toString(),
    heroLinkLineMiddle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "heroLinkLineMiddle",
    }).toString(),
    heroLinkLineSecondaryLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "heroLinkLineSecondaryLabel",
    }).toString(),
    heroLinkLineSecondaryHref: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "heroLinkLineSecondaryHref",
    }).toString(),
    mainHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "mainHeading",
    }).toString(),
    formHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "formHeading",
    }).toString(),
    contactInfoHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "contactInfoHeading",
    }).toString(),
    emailLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "emailLabel",
    }).toString(),
    phoneLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "phoneLabel",
    }).toString(),
    addressLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "addressLabel",
    }).toString(),
    locationHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "locationHeading",
    }).toString(),
    openMapLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "openMapLabel",
    }).toString(),
    directionsLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "contactPage",
      path: "directionsLabel",
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
    addressLine2: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: siteSettingsId,
      type: "siteSettings",
      path: "addressLine2",
    }).toString(),
    city: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: siteSettingsId,
      type: "siteSettings",
      path: "city",
    }).toString(),
    country: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: siteSettingsId,
      type: "siteSettings",
      path: "country",
    }).toString(),
    postalCode: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: siteSettingsId,
      type: "siteSettings",
      path: "postalCode",
    }).toString(),
    googleMapsEmbedUrl: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: siteSettingsId,
      type: "siteSettings",
      path: "googleMapsEmbedUrl",
    }).toString(),
    googleMapsOpenUrl: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: siteSettingsId,
      type: "siteSettings",
      path: "googleMapsOpenUrl",
    }).toString(),
    googleMapsDirectionsUrl: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: siteSettingsId,
      type: "siteSettings",
      path: "googleMapsDirectionsUrl",
    }).toString(),
    locationName: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: siteSettingsId,
      type: "siteSettings",
      path: "locationName",
    }).toString(),
  };

  const heroTitle = contactPage?.heroTitle ?? defaults.heroTitle;
  const heroDescription = contactPage?.heroDescription ?? defaults.heroDescription;
  const heroLinkLinePrimaryLabel =
    contactPage?.heroLinkLinePrimaryLabel ?? defaults.heroLinkLinePrimaryLabel;
  const heroLinkLinePrimaryHref =
    contactPage?.heroLinkLinePrimaryHref ?? defaults.heroLinkLinePrimaryHref;
  const heroLinkLineMiddle =
    contactPage?.heroLinkLineMiddle ?? defaults.heroLinkLineMiddle;
  const heroLinkLineSecondaryLabel =
    contactPage?.heroLinkLineSecondaryLabel ?? defaults.heroLinkLineSecondaryLabel;
  const heroLinkLineSecondaryHref =
    contactPage?.heroLinkLineSecondaryHref ?? defaults.heroLinkLineSecondaryHref;
  const mainHeading = contactPage?.mainHeading ?? defaults.mainHeading;
  const formHeading = contactPage?.formHeading ?? defaults.formHeading;
  const contactInfoHeading =
    contactPage?.contactInfoHeading ?? defaults.contactInfoHeading;
  const emailLabel = contactPage?.emailLabel ?? defaults.emailLabel;
  const phoneLabel = contactPage?.phoneLabel ?? defaults.phoneLabel;
  const addressLabel = contactPage?.addressLabel ?? defaults.addressLabel;
  const locationHeading = contactPage?.locationHeading ?? defaults.locationHeading;
  const openMapLabel = contactPage?.openMapLabel ?? defaults.openMapLabel;
  const directionsLabel =
    contactPage?.directionsLabel ?? defaults.directionsLabel;

  return (
    <>
      {/* Hero + Contact Section */}
      <section
        className="from-primary/5 to-background bg-linear-to-b py-8 sm:py-10 lg:py-16"
        aria-labelledby="contact-main-heading"
      >
        <h2 id="contact-main-heading" className="sr-only" data-sanity={pageAttrs.mainHeading}>
          {mainHeading}
        </h2>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
            {/* Left: Title + Description + Contact Info */}
            <FadeIn className="text-center md:text-left">
              <h1
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                data-sanity={pageAttrs.heroTitle}
              >
                {heroTitle}
              </h1>
              <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                <span data-sanity={pageAttrs.heroDescription}>{heroDescription}</span>{" "}
                <Link
                  href={heroLinkLinePrimaryHref}
                  className="text-primary hover:underline"
                  data-sanity={pageAttrs.heroLinkLinePrimaryLabel}
                >
                  {heroLinkLinePrimaryLabel}
                </Link>{" "}
                <span data-sanity={pageAttrs.heroLinkLineMiddle}>{heroLinkLineMiddle}</span>{" "}
                <Link
                  href={heroLinkLineSecondaryHref}
                  className="text-primary hover:underline"
                  data-sanity={pageAttrs.heroLinkLineSecondaryLabel}
                >
                  {heroLinkLineSecondaryLabel}
                </Link>.
              </p>

              <h3
                className="mt-8 mb-4 text-xl font-semibold"
                data-sanity={pageAttrs.contactInfoHeading}
              >
                {contactInfoHeading}
              </h3>
              <div className="space-y-3 text-left">
                <article className="bg-muted/50 hover:bg-muted/70 flex items-start gap-3 rounded-lg p-4 transition-colors">
                  <div
                    className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    aria-hidden="true"
                  >
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold" data-sanity={pageAttrs.emailLabel}>
                      {emailLabel}
                    </h4>
                    <a
                      href={`mailto:${settings.contactEmail}`}
                      data-sanity={siteAttrs.contactEmail}
                      className="text-muted-foreground hover:text-primary block truncate text-sm transition-colors"
                    >
                      {settings.contactEmail}
                    </a>
                  </div>
                </article>

                <article className="bg-muted/50 hover:bg-muted/70 flex items-start gap-3 rounded-lg p-4 transition-colors">
                  <div
                    className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    aria-hidden="true"
                  >
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold" data-sanity={pageAttrs.phoneLabel}>
                      {phoneLabel}
                    </h4>
                    <a
                      href={`tel:${settings.phone.replace(/\s/g, "")}`}
                      data-sanity={siteAttrs.phone}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {settings.phone}
                    </a>
                  </div>
                </article>

                <article className="bg-muted/50 hover:bg-muted/70 flex items-start gap-3 rounded-lg p-4 transition-colors">
                  <div
                    className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    aria-hidden="true"
                  >
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold" data-sanity={pageAttrs.addressLabel}>
                      {addressLabel}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      <span data-sanity={siteAttrs.addressLine1}>{settings.addressLine1}</span>
                      <br />
                      <span data-sanity={siteAttrs.addressLine2}>{settings.addressLine2}</span>
                      <br />
                      <span data-sanity={siteAttrs.city}>{settings.city}</span>,{" "}
                      <span data-sanity={siteAttrs.country}>{settings.country}</span>{" "}
                      <span data-sanity={siteAttrs.postalCode}>{settings.postalCode}</span>
                    </p>
                  </div>
                </article>
              </div>
            </FadeIn>

            {/* Right: Contact Form */}
            <FadeIn direction="right" delay={0.2}>
              <h3 className="mb-4 text-xl font-semibold" data-sanity={pageAttrs.formHeading}>
                {formHeading}
              </h3>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="mb-4 text-xl font-semibold" data-sanity={pageAttrs.locationHeading}>
              {locationHeading}
            </h3>
            <GoogleMap
              embedUrl={settings.googleMapsEmbedUrl}
              directUrl={settings.googleMapsOpenUrl}
              directionsUrl={settings.googleMapsDirectionsUrl}
              locationName={settings.locationName}
              addressLine1={settings.addressLine1}
              city={settings.city}
              openMapLabel={openMapLabel}
              directionsLabel={directionsLabel}
              embedAttr={siteAttrs.googleMapsEmbedUrl}
              locationNameAttr={siteAttrs.locationName}
              addressAttr={siteAttrs.addressLine1}
              openMapLabelAttr={pageAttrs.openMapLabel}
              directionsLabelAttr={pageAttrs.directionsLabel}
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
