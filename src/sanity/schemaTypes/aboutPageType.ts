import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
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
      rows: 3,
    }),
    defineField({
      name: "heroLinkLineIntro",
      title: "Hero Link Line Intro",
      type: "string",
      description: 'Text before first link, e.g. "Explore our"',
    }),
    defineField({
      name: "heroLinkLinePrimaryLabel",
      title: "Hero Link Line Primary Label",
      type: "string",
      description: 'e.g. "apheresis-focused product roadmap"',
    }),
    defineField({
      name: "heroLinkLinePrimaryHref",
      title: "Hero Link Line Primary Href",
      type: "string",
      initialValue: "/products",
    }),
    defineField({
      name: "heroLinkLineMiddle",
      title: "Hero Link Line Middle Text",
      type: "string",
      description: 'Text between links, e.g. "and"',
    }),
    defineField({
      name: "heroLinkLineSecondaryLabel",
      title: "Hero Link Line Secondary Label",
      type: "string",
      description: 'e.g. "target cell isolation services"',
    }),
    defineField({
      name: "heroLinkLineSecondaryHref",
      title: "Hero Link Line Secondary Href",
      type: "string",
      initialValue: "/services",
    }),
    defineField({
      name: "heroLinkLineOutro",
      title: "Hero Link Line Outro",
      type: "string",
      description:
        'Text after second link, e.g. "to see how our R&D in Turkiye translates into practical global workflows."',
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "Optional image shown on the right side of the hero section",
    }),
    defineField({
      name: "corePlatformsHeading",
      title: "Core Platforms Heading",
      type: "string",
    }),
    defineField({
      name: "locationsHeading",
      title: "Locations Heading",
      type: "string",
    }),
    defineField({
      name: "locationsDescription",
      title: "Locations Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "locationOneName",
      title: "Location One Name",
      type: "string",
    }),
    defineField({
      name: "locationOneDescription",
      title: "Location One Description",
      type: "string",
    }),
    defineField({
      name: "locationOneImage",
      title: "Location One Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "locationTwoName",
      title: "Location Two Name",
      type: "string",
    }),
    defineField({
      name: "locationTwoDescription",
      title: "Location Two Description",
      type: "string",
    }),
    defineField({
      name: "locationTwoImage",
      title: "Location Two Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "researchHeading",
      title: "Research Section Heading",
      type: "string",
    }),
    defineField({
      name: "researchDescription",
      title: "Research Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "researchPrimaryCtaLabel",
      title: "Research Primary CTA Label",
      type: "string",
    }),
    defineField({
      name: "researchPrimaryCtaHref",
      title: "Research Primary CTA Href",
      type: "string",
      initialValue: "/products/laboratory-instruments",
    }),
    defineField({
      name: "researchSecondaryCtaLabel",
      title: "Research Secondary CTA Label",
      type: "string",
    }),
    defineField({
      name: "researchSecondaryCtaHref",
      title: "Research Secondary CTA Href",
      type: "string",
      initialValue: "/products/laboratory-consumables",
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
      return { title: "About Page" };
    },
  },
});
