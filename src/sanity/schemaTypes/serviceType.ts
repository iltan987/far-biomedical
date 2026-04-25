import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "iconKey",
      title: "Icon",
      type: "string",
      description: "Internal icon identifier",
      options: {
        list: [
          { title: "Flask / Sample Preparation", value: "flask-conical" },
          { title: "Microscope / Cell Isolation", value: "microscope" },
          { title: "Shield / Quality Control", value: "shield" },
          { title: "Truck / Delivery", value: "truck" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
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
    select: { title: "title", subtitle: "description" },
  },
});
