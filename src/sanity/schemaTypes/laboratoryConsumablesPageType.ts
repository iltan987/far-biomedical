import { defineField, defineType } from "sanity";

export const laboratoryConsumablesPageType = defineType({
  name: "laboratoryConsumablesPage",
  title: "Laboratory Consumables Page",
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
      initialValue: "Laboratory Consumables",
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
        'Text before link, e.g. "Need a custom consumables list for your biomedical workflow anywhere in the world?"',
    }),
    defineField({
      name: "heroLinkLineLabel",
      title: "Hero Link Line Label",
      type: "string",
      description: 'e.g. "Send your requirements"',
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
      name: "consumablesSectionHeading",
      title: "Consumables Section Heading",
      type: "string",
      initialValue: "Available Consumables",
    }),
    defineField({
      name: "orderCtaHeading",
      title: "Order CTA Heading",
      type: "string",
      initialValue: "Ready to Order?",
    }),
    defineField({
      name: "orderCtaDescription",
      title: "Order CTA Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "orderCtaButtonLabel",
      title: "Order CTA Button Label",
      type: "string",
      initialValue: "Email Us",
    }),
    defineField({
      name: "consumables",
      title: "Consumables",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Consumable ID",
              type: "string",
              description:
                "Stable identifier used in seed data and references (e.g. microcentrifuge-tubes).",
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
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
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
            select: {
              title: "name",
              subtitle: "description",
              media: "image",
            },
          },
        },
      ],
      description:
        "Manage all consumables shown on the Laboratory Consumables page.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Laboratory Consumables Page" };
    },
  },
});
