import { defineField, defineType } from "sanity";

export const productsPageType = defineType({
  name: "productsPage",
  title: "Products Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "productCategories",
      title: "Product Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: (rule) =>
                rule.required().regex(/^[a-z0-9-]+$/, {
                  name: "slug-like id",
                  invert: false,
                }),
              description: "Stable internal id for this category card",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "iconKey",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Beaker", value: "beaker" },
                  { title: "Flask", value: "flask-conical" },
                  { title: "Package", value: "package" },
                ],
                layout: "radio",
              },
            }),
            defineField({
              name: "badge",
              title: "Badge",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Href",
              type: "string",
            }),
            defineField({
              name: "ctaLabel",
              title: "CTA Label",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "badge", media: "image" },
          },
        },
      ],
      description: "Add, remove, and reorder the category cards shown on the Products page.",
    }),
    defineField({
      name: "contactHeading",
      title: "Contact CTA Heading",
      type: "string",
    }),
    defineField({
      name: "contactDescription",
      title: "Contact CTA Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "contactButtonLabel",
      title: "Contact CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "contactButtonHref",
      title: "Contact CTA Button Href",
      type: "string",
      initialValue: "/contact",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Products Page" };
    },
  },
});
