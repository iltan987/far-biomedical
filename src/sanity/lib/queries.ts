import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(
  `coalesce(*[_id == "drafts.siteSettings"][0], *[_id == "siteSettings"][0]) {
    _id, heroTitle, heroBadge, heroImage, heroSubtitle, heroDescription,
    heroPrimaryCtaLabel, heroSecondaryCtaLabel,
    siteName, logoText, siteDescription,
    productsLabel, productsHeading, productsDescription,
    labSuppliesCalloutHeading, labSuppliesCalloutDescription, productsCtaLabel,
    servicesLabel, servicesHeading, servicesDescription,
    servicesInlineIntro, servicesInlinePrimaryLabel, servicesInlinePrimaryHref,
    servicesInlineMiddle, servicesInlineSecondaryLabel, servicesInlineSecondaryHref, servicesInlineOutro,
    servicesCtaLabel,
    quoteText, quoteAttribution, quoteCtaHeading, quoteCtaDescription, quoteCtaButtonLabel,
    locationName, googleMapsEmbedUrl, googleMapsOpenUrl, googleMapsDirectionsUrl,
    contactEmail, phone,
    addressLine1, addressLine2, city, country, postalCode,
    linkedinUrl, instagramUrl,
    footerCompanyHeading, footerProductsHeading, footerContactHeading,
    footerContactLinkLabel, footerCopyrightSuffix
  }`
);

export const aboutPageQuery = defineQuery(
  `coalesce(*[_id == "drafts.aboutPage"][0], *[_id == "aboutPage"][0]) {
    _id,
    heroTitle, heroDescription, heroImage,
    heroLinkLineIntro, heroLinkLinePrimaryLabel, heroLinkLinePrimaryHref,
    heroLinkLineMiddle, heroLinkLineSecondaryLabel, heroLinkLineSecondaryHref, heroLinkLineOutro,
    corePlatformsHeading,
    locationsHeading, locationsDescription,
    locationOneName, locationOneDescription, locationOneImage,
    locationTwoName, locationTwoDescription, locationTwoImage,
    researchHeading, researchDescription,
    researchPrimaryCtaLabel, researchPrimaryCtaHref,
    researchSecondaryCtaLabel, researchSecondaryCtaHref,
    contactHeading, contactDescription, contactButtonLabel
  }`
);

export const contactPageQuery = defineQuery(
  `coalesce(*[_id == "drafts.contactPage"][0], *[_id == "contactPage"][0]) {
    _id,
    heroTitle, heroDescription,
    heroLinkLinePrimaryLabel, heroLinkLinePrimaryHref,
    heroLinkLineMiddle,
    heroLinkLineSecondaryLabel, heroLinkLineSecondaryHref,
    mainHeading,
    formHeading,
    contactInfoHeading,
    emailLabel, phoneLabel, addressLabel,
    locationHeading,
    openMapLabel, directionsLabel
  }`
);

export const laboratoryConsumablesPageQuery = defineQuery(
  `coalesce(*[_id == "drafts.laboratoryConsumablesPage"][0], *[_id == "laboratoryConsumablesPage"][0]) {
    _id,
    backButtonLabel,
    heroTitle, heroDescription,
    heroLinkLineIntro, heroLinkLineLabel, heroLinkLineHref, heroLinkLineOutro,
    consumablesSectionHeading,
    orderCtaHeading, orderCtaDescription, orderCtaButtonLabel,
    consumables[]{
      _key, id, name, description, image, order
    }
  }`
);

export const laboratoryInstrumentsPageQuery = defineQuery(
  `coalesce(*[_id == "drafts.laboratoryInstrumentsPage"][0], *[_id == "laboratoryInstrumentsPage"][0]) {
    _id,
    backButtonLabel,
    heroTitle, heroDescription,
    heroLinkLineIntro, heroLinkLineLabel, heroLinkLineHref, heroLinkLineOutro,
    instrumentsSectionHeading,
    helpHeading, helpDescription, helpButtonLabel,
    instruments[]{
      _key, id, name, category, description, specifications, image, order
    }
  }`
);

export const servicesPageQuery = defineQuery(
  `coalesce(*[_id == "drafts.servicesPage"][0], *[_id == "servicesPage"][0]) {
    _id,
    heroTitle, heroDescription,
    coverageTitle, coverageDescription,
    supportTitle, supportDescription,
    workflowHeading, workflowDescription,
    workflowSteps[]{
      _key, id, title, description, image
    },
    supplyImage, supplyHeading, supplyDescription,
    supplyLinkLineIntro, supplyLinkLineLabel, supplyLinkLineHref, supplyLinkLineOutro,
    supplyPrimaryCtaLabel, supplyPrimaryCtaHref,
    supplySecondaryCtaLabel, supplySecondaryCtaHref,
    faqsHeading,
    faqs[]{
      _key, id, question, answer
    },
    contactHeading, contactDescription, contactButtonLabel
  }`
);

export const productsPageQuery = defineQuery(
  `coalesce(*[_id == "drafts.productsPage"][0], *[_id == "productsPage"][0]) {
    _id,
    heroTitle, heroDescription,
    productCategories[]{
      _key, id, title, description, iconKey, badge, href, ctaLabel, image
    },
    contactHeading, contactDescription, contactButtonLabel, contactButtonHref
  }`
);

export const teamPageQuery = defineQuery(
  `coalesce(*[_id == "drafts.teamPage"][0], *[_id == "teamPage"][0]) {
    _id,
    heroTitle, heroDescription, heroImage,
    teamGridHeading,
    joinHeading, joinDescription, joinButtonLabel, joinButtonHref,
    members[]{
      _key, id, name, title, photo, linkedinUrl, order
    }
  }`
);

export const productsQuery = defineQuery(
  `*[_type == "product"] | order(order asc) {
    _id, title, description, longDescription, badge, iconKey, features, image, href, order
  }`
);

export const servicesQuery = defineQuery(
  `*[_type == "service"] | order(order asc) {
    _id, title, description, iconKey, order
  }`
);
