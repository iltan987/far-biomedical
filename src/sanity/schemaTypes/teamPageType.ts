import { defineField, defineType } from "sanity";

export const teamPageType = defineType({
  name: "teamPage",
  title: "Team Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (rule) => rule.required(),
      initialValue: "Our Team",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "teamGridHeading",
      title: "Team Grid Heading",
      type: "string",
      initialValue: "Team Members",
    }),
    defineField({
      name: "joinHeading",
      title: "Join CTA Heading",
      type: "string",
      initialValue: "Work With Us",
    }),
    defineField({
      name: "joinDescription",
      title: "Join CTA Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "joinButtonLabel",
      title: "Join CTA Button Label",
      type: "string",
      initialValue: "Get in Touch",
    }),
    defineField({
      name: "joinButtonHref",
      title: "Join CTA Button Href",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Member ID",
              type: "string",
              description:
                "Stable identifier used in seed data and references (e.g. ceren-argul).",
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
              title: "Full Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "title",
              title: "Job Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "linkedinUrl",
              title: "LinkedIn URL",
              type: "url",
            }),
            defineField({
              name: "order",
              title: "Display Order",
              type: "number",
              description: "Lower numbers appear first",
              initialValue: 99,
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "title", media: "photo" },
          },
        },
      ],
      description: "Manage all members shown on the Team page.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Team Page" };
    },
  },
});
