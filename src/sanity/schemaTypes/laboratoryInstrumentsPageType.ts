import { defineField, defineType } from "sanity";

export const laboratoryInstrumentsPageType = defineType({
  name: "laboratoryInstrumentsPage",
  title: "Laboratory Instruments Page",
  type: "document",
  fields: [
    defineField({
      name: "backButtonLabel",
      title: "Back Button Label",
      type: "string",
      initialValue: "Back to Products",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (rule) => rule.required(),
      initialValue: "Laboratory Instruments",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroLinkLineIntro",
      title: "Hero Link Line Intro",
      type: "string",
      description:
        'Text before link, e.g. "For instrument sourcing and biomedical manufacturer collaboration requests worldwide, please"',
    }),
    defineField({
      name: "heroLinkLineLabel",
      title: "Hero Link Line Label",
      type: "string",
      description: 'e.g. "contact our team"',
    }),
    defineField({
      name: "heroLinkLineHref",
      title: "Hero Link Line Href",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "heroLinkLineOutro",
      title: "Hero Link Line Outro",
      type: "string",
      description: 'Optional text after link, e.g. "."',
    }),
    defineField({
      name: "instrumentsSectionHeading",
      title: "Instruments Section Heading",
      type: "string",
      initialValue: "Available Instruments",
    }),
    defineField({
      name: "helpHeading",
      title: "Help CTA Heading",
      type: "string",
      initialValue: "Need Help Choosing?",
    }),
    defineField({
      name: "helpDescription",
      title: "Help CTA Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "helpButtonLabel",
      title: "Help CTA Button Label",
      type: "string",
      initialValue: "Contact Us",
    }),
    defineField({
      name: "instruments",
      title: "Instruments",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Instrument ID",
              type: "string",
              description:
                "Stable identifier used in seed data and references (e.g. fume-hood).",
              validation: (rule) =>
                rule
                  .required()
                  .regex(
                    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                    "Use lowercase letters, numbers, and hyphens only."
                  ),
            }),
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Fume Hoods", value: "fume-hoods" },
                  { title: "Ovens", value: "ovens" },
                  { title: "Incubators", value: "incubators" },
                  { title: "Ultrasonic Baths", value: "ultrasonic-baths" },
                  { title: "Shakers", value: "shakers" },
                  { title: "Vortex Mixers", value: "vortex-mixers" },
                  { title: "Pipettes & Micropipettes", value: "pipettes" },
                  { title: "Centrifuges", value: "centrifuges" },
                  { title: "Balances", value: "balances" },
                  { title: "Autoclaves", value: "autoclaves" },
                  { title: "Pumps", value: "pumps" },
                ],
                layout: "dropdown",
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "specifications",
              title: "Specifications",
              type: "array",
              of: [{ type: "string" }],
              description: "Add one specification per line",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "order",
              title: "Display Order",
              type: "number",
              initialValue: 99,
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "category", media: "image" },
          },
        },
      ],
      description:
        "Manage all instruments shown on the Laboratory Instruments page.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Laboratory Instruments Page" };
    },
  },
});
