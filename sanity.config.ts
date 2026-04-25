import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { type StructureResolver, structureTool } from "sanity/structure";

import {
  SINGLETON_DOCUMENT_IDS,
  SINGLETON_SCHEMA_TYPES,
} from "./src/sanity/lib/singletons";
import { schemaTypes } from "./src/sanity/schemaTypes";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .id(SINGLETON_DOCUMENT_IDS.siteSettings)
        .title("Site Settings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId(SINGLETON_DOCUMENT_IDS.siteSettings)
        ),
      S.listItem()
        .id(SINGLETON_DOCUMENT_IDS.aboutPage)
        .title("About Page")
        .child(
          S.document()
            .schemaType("aboutPage")
            .documentId(SINGLETON_DOCUMENT_IDS.aboutPage)
        ),
      S.listItem()
        .id(SINGLETON_DOCUMENT_IDS.contactPage)
        .title("Contact Page")
        .child(
          S.document()
            .schemaType("contactPage")
            .documentId(SINGLETON_DOCUMENT_IDS.contactPage)
        ),
      S.listItem()
        .id(SINGLETON_DOCUMENT_IDS.laboratoryConsumablesPage)
        .title("Laboratory Consumables Page")
        .child(
          S.document()
            .schemaType("laboratoryConsumablesPage")
            .documentId(SINGLETON_DOCUMENT_IDS.laboratoryConsumablesPage)
        ),
      S.listItem()
        .id(SINGLETON_DOCUMENT_IDS.laboratoryInstrumentsPage)
        .title("Laboratory Instruments Page")
        .child(
          S.document()
            .schemaType("laboratoryInstrumentsPage")
            .documentId(SINGLETON_DOCUMENT_IDS.laboratoryInstrumentsPage)
        ),
      S.listItem()
        .id(SINGLETON_DOCUMENT_IDS.productsPage)
        .title("Products Page")
        .child(
          S.document()
            .schemaType("productsPage")
            .documentId(SINGLETON_DOCUMENT_IDS.productsPage)
        ),
      S.listItem()
        .id(SINGLETON_DOCUMENT_IDS.servicesPage)
        .title("Services Page")
        .child(
          S.document()
            .schemaType("servicesPage")
            .documentId(SINGLETON_DOCUMENT_IDS.servicesPage)
        ),
      S.listItem()
        .id(SINGLETON_DOCUMENT_IDS.teamPage)
        .title("Team Page")
        .child(
          S.document()
            .schemaType("teamPage")
            .documentId(SINGLETON_DOCUMENT_IDS.teamPage)
        ),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_SCHEMA_TYPES.has(item.getId() ?? "")
      ),
    ]);

export default defineConfig({
  name: "far-biomedical",
  title: "FAR Better Bio",
  projectId: "mr2294zf",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    visionTool(),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
  schema: {
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !SINGLETON_SCHEMA_TYPES.has(schemaType)
      ),
    types: schemaTypes,
  },
  document: {
    actions: (actions, context) =>
      SINGLETON_SCHEMA_TYPES.has(context.schemaType)
        ? actions.filter(({ action }) => action !== "duplicate")
        : actions,
  },
});
