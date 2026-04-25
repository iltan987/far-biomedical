export const SINGLETON_DOCUMENT_IDS = {
  aboutPage: "aboutPage",
  contactPage: "contactPage",
  laboratoryConsumablesPage: "laboratoryConsumablesPage",
  laboratoryInstrumentsPage: "laboratoryInstrumentsPage",
  productsPage: "productsPage",
  servicesPage: "servicesPage",
  siteSettings: "siteSettings",
  teamPage: "teamPage",
} as const;

export const SINGLETON_SCHEMA_TYPES = new Set(
  Object.keys(SINGLETON_DOCUMENT_IDS)
);
