export type SanityImage = {
  _type: string;
  asset: { _ref: string; _type: string };
  hotspot?: object;
  crop?: object;
} | null | undefined;

export type SanityProduct = {
  _id: string;
  title: string;
  description: string;
  longDescription?: string | null;
  badge?: string | null;
  iconKey?: string | null;
  features?: string[] | null;
  image?: SanityImage;
  href?: string | null;
  order: number;
};

export type SanityService = {
  _id: string;
  title: string;
  description: string;
  iconKey?: string | null;
  order: number;
};

export type SanitySiteSettings = {
  _id: string;
  heroTitle?: string | null;
  heroBadge?: string | null;
  heroImage?: SanityImage;
  heroSubtitle?: string | null;
  heroDescription?: string | null;
  heroPrimaryCtaLabel?: string | null;
  heroSecondaryCtaLabel?: string | null;
  siteName?: string | null;
  logoText?: string | null;
  siteDescription?: string | null;
  productsLabel?: string | null;
  productsHeading?: string | null;
  productsDescription?: string | null;
  labSuppliesCalloutHeading?: string | null;
  labSuppliesCalloutDescription?: string | null;
  productsCtaLabel?: string | null;
  servicesLabel?: string | null;
  servicesHeading?: string | null;
  servicesDescription?: string | null;
  servicesInlineIntro?: string | null;
  servicesInlinePrimaryLabel?: string | null;
  servicesInlinePrimaryHref?: string | null;
  servicesInlineMiddle?: string | null;
  servicesInlineSecondaryLabel?: string | null;
  servicesInlineSecondaryHref?: string | null;
  servicesInlineOutro?: string | null;
  servicesCtaLabel?: string | null;
  quoteText?: string | null;
  quoteAttribution?: string | null;
  quoteCtaHeading?: string | null;
  quoteCtaDescription?: string | null;
  quoteCtaButtonLabel?: string | null;
  locationName?: string | null;
  googleMapsEmbedUrl?: string | null;
  googleMapsOpenUrl?: string | null;
  googleMapsDirectionsUrl?: string | null;
  contactEmail?: string | null;
  phone?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  country?: string | null;
  postalCode?: string | null;
  linkedinUrl?: string | null;
  instagramUrl?: string | null;
  footerCompanyHeading?: string | null;
  footerProductsHeading?: string | null;
  footerContactHeading?: string | null;
  footerContactLinkLabel?: string | null;
  footerCopyrightSuffix?: string | null;
} | null;

export type SanityAboutPage = {
  _id: string;
  heroTitle?: string | null;
  heroDescription?: string | null;
  heroLinkLineIntro?: string | null;
  heroLinkLinePrimaryLabel?: string | null;
  heroLinkLinePrimaryHref?: string | null;
  heroLinkLineMiddle?: string | null;
  heroLinkLineSecondaryLabel?: string | null;
  heroLinkLineSecondaryHref?: string | null;
  heroLinkLineOutro?: string | null;
  heroImage?: SanityImage;
  corePlatformsHeading?: string | null;
  locationsHeading?: string | null;
  locationsDescription?: string | null;
  locationOneName?: string | null;
  locationOneDescription?: string | null;
  locationOneImage?: SanityImage;
  locationTwoName?: string | null;
  locationTwoDescription?: string | null;
  locationTwoImage?: SanityImage;
  researchHeading?: string | null;
  researchDescription?: string | null;
  researchPrimaryCtaLabel?: string | null;
  researchPrimaryCtaHref?: string | null;
  researchSecondaryCtaLabel?: string | null;
  researchSecondaryCtaHref?: string | null;
  contactHeading?: string | null;
  contactDescription?: string | null;
  contactButtonLabel?: string | null;
} | null;

export type SanityContactPage = {
  _id: string;
  heroTitle?: string | null;
  heroDescription?: string | null;
  heroLinkLinePrimaryLabel?: string | null;
  heroLinkLinePrimaryHref?: string | null;
  heroLinkLineMiddle?: string | null;
  heroLinkLineSecondaryLabel?: string | null;
  heroLinkLineSecondaryHref?: string | null;
  mainHeading?: string | null;
  formHeading?: string | null;
  contactInfoHeading?: string | null;
  emailLabel?: string | null;
  phoneLabel?: string | null;
  addressLabel?: string | null;
  locationHeading?: string | null;
  openMapLabel?: string | null;
  directionsLabel?: string | null;
} | null;

export type SanityLaboratoryConsumablesPage = {
  _id: string;
  backButtonLabel?: string | null;
  heroTitle?: string | null;
  heroDescription?: string | null;
  heroLinkLineIntro?: string | null;
  heroLinkLineLabel?: string | null;
  heroLinkLineHref?: string | null;
  heroLinkLineOutro?: string | null;
  consumablesSectionHeading?: string | null;
  orderCtaHeading?: string | null;
  orderCtaDescription?: string | null;
  orderCtaButtonLabel?: string | null;
  consumables?:
    | {
        _key?: string;
        id?: string | null;
        name?: string | null;
        description?: string | null;
        image?: SanityImage;
        order?: number | null;
      }[]
    | null;
} | null;

export type SanityLaboratoryInstrumentsPage = {
  _id: string;
  backButtonLabel?: string | null;
  heroTitle?: string | null;
  heroDescription?: string | null;
  heroLinkLineIntro?: string | null;
  heroLinkLineLabel?: string | null;
  heroLinkLineHref?: string | null;
  heroLinkLineOutro?: string | null;
  instrumentsSectionHeading?: string | null;
  helpHeading?: string | null;
  helpDescription?: string | null;
  helpButtonLabel?: string | null;
  instruments?:
    | {
        _key?: string;
        id?: string | null;
        name?: string | null;
        category?: string | null;
        description?: string | null;
        specifications?: string[] | null;
        image?: SanityImage;
        order?: number | null;
      }[]
    | null;
} | null;

export type SanityServicesPage = {
  _id: string;
  heroTitle?: string | null;
  heroDescription?: string | null;
  coverageTitle?: string | null;
  coverageDescription?: string | null;
  supportTitle?: string | null;
  supportDescription?: string | null;
  workflowHeading?: string | null;
  workflowDescription?: string | null;
  workflowSteps?:
    | {
        _key?: string;
        id?: string | null;
        title?: string | null;
        description?: string | null;
        image?: SanityImage;
      }[]
    | null;
  supplyImage?: SanityImage;
  supplyHeading?: string | null;
  supplyDescription?: string | null;
  supplyLinkLineIntro?: string | null;
  supplyLinkLineLabel?: string | null;
  supplyLinkLineHref?: string | null;
  supplyLinkLineOutro?: string | null;
  supplyPrimaryCtaLabel?: string | null;
  supplyPrimaryCtaHref?: string | null;
  supplySecondaryCtaLabel?: string | null;
  supplySecondaryCtaHref?: string | null;
  faqsHeading?: string | null;
  faqs?:
    | {
        _key?: string;
        id?: string | null;
        question?: string | null;
        answer?: string | null;
      }[]
    | null;
  contactHeading?: string | null;
  contactDescription?: string | null;
  contactButtonLabel?: string | null;
} | null;

export type SanityProductsPage = {
  _id: string;
  heroTitle?: string | null;
  heroDescription?: string | null;
  productCategories?:
    | {
        _key?: string;
        id?: string | null;
        title?: string | null;
        description?: string | null;
        iconKey?: string | null;
        badge?: string | null;
        href?: string | null;
        ctaLabel?: string | null;
        image?: SanityImage;
      }[]
    | null;
  contactHeading?: string | null;
  contactDescription?: string | null;
  contactButtonLabel?: string | null;
  contactButtonHref?: string | null;
} | null;

export type SanityTeamPage = {
  _id: string;
  heroTitle?: string | null;
  heroDescription?: string | null;
  heroImage?: SanityImage;
  teamGridHeading?: string | null;
  joinHeading?: string | null;
  joinDescription?: string | null;
  joinButtonLabel?: string | null;
  joinButtonHref?: string | null;
  members?:
    | {
        _key?: string;
        id?: string | null;
        name?: string | null;
        title?: string | null;
        photo?: SanityImage;
        linkedinUrl?: string | null;
        order?: number | null;
      }[]
    | null;
} | null;
