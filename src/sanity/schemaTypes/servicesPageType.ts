import { defineField, defineType } from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Page",
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
      name: "coverageTitle",
      title: "Coverage Card Title",
      type: "string",
    }),
    defineField({
      name: "coverageDescription",
      title: "Coverage Card Description",
      type: "string",
    }),
    defineField({
      name: "supportTitle",
      title: "Support Card Title",
      type: "string",
    }),
    defineField({
      name: "supportDescription",
      title: "Support Card Description",
      type: "string",
    }),
    defineField({
      name: "workflowHeading",
      title: "Workflow Heading",
      type: "string",
    }),
    defineField({
      name: "workflowDescription",
      title: "Workflow Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "workflowSteps",
      title: "Workflow Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Step ID",
              type: "string",
              description:
                "Stable identifier used for seeding and references (e.g. target-cell-isolation).",
              validation: (rule) =>
                rule
                  .required()
                  .regex(
                    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                    "Use lowercase letters, numbers, and hyphens only."
                  ),
            }),
            defineField({
              name: "title",
              title: "Step Title",
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
              name: "image",
              title: "Step Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description", media: "image" },
          },
        },
      ],
      description: "Add, remove, and reorder workflow steps directly on the Services page.",
    }),
    defineField({
      name: "supplyImage",
      title: "Supply Section Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "supplyHeading",
      title: "Supply Section Heading",
      type: "string",
    }),
    defineField({
      name: "supplyDescription",
      title: "Supply Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "supplyLinkLineIntro",
      title: "Supply Link Line Intro",
      type: "string",
      description: 'Text before link, e.g. "You can also review our"',
    }),
    defineField({
      name: "supplyLinkLineLabel",
      title: "Supply Link Line Label",
      type: "string",
      description: 'e.g. "apheresis and aferez-focused product roadmap"',
    }),
    defineField({
      name: "supplyLinkLineHref",
      title: "Supply Link Line Href",
      type: "string",
      initialValue: "/products",
    }),
    defineField({
      name: "supplyLinkLineOutro",
      title: "Supply Link Line Outro",
      type: "string",
      description: 'Text after link, e.g. "for device and consumable planning."',
    }),
    defineField({
      name: "supplyPrimaryCtaLabel",
      title: "Supply Primary CTA Label",
      type: "string",
    }),
    defineField({
      name: "supplyPrimaryCtaHref",
      title: "Supply Primary CTA Href",
      type: "string",
      initialValue: "/products/laboratory-instruments",
    }),
    defineField({
      name: "supplySecondaryCtaLabel",
      title: "Supply Secondary CTA Label",
      type: "string",
    }),
    defineField({
      name: "supplySecondaryCtaHref",
      title: "Supply Secondary CTA Href",
      type: "string",
      initialValue: "/products/laboratory-consumables",
    }),
    defineField({
      name: "faqsHeading",
      title: "FAQs Heading",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "FAQ ID",
              type: "string",
              description:
                "Stable identifier used for seeding and references (e.g. international-services).",
              validation: (rule) =>
                rule
                  .required()
                  .regex(
                    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                    "Use lowercase letters, numbers, and hyphens only."
                  ),
            }),
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "question", subtitle: "answer" },
          },
        },
      ],
      description: "Add, remove, and reorder FAQs directly on the Services page.",
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
  ],
  preview: {
    prepare() {
      return { title: "Services Page" };
    },
  },
});
