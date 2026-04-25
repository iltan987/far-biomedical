import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: 'e.g. "Coming Soon", "In Development"',
    }),
    defineField({
      name: "iconKey",
      title: "Icon",
      type: "string",
      description: "Internal icon identifier",
      options: {
        list: [
          { title: "Magnet", value: "magnet" },
          { title: "Beaker", value: "beaker" },
          { title: "Activity / Pulse", value: "activity" },
          { title: "Code", value: "code" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "features",
      title: "Feature Highlights",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Short bullet points shown on the home page services card (AutoCeive only)",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "href",
      title: "Link (href)",
      type: "string",
      description: 'Internal path, e.g. "/products"',
      initialValue: "/products",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 99,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "badge", media: "image" },
  },
});
