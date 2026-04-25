import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (rule) => rule.required(),
      initialValue: "Contact Us",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description Intro",
      type: "text",
      rows: 3,
      description:
        'Text before the linked words, e.g. "Have questions? ... aferez-focused"',
    }),
    defineField({
      name: "heroLinkLinePrimaryLabel",
      title: "Hero Link — Primary Label",
      type: "string",
      description: 'e.g. "product programs"',
    }),
    defineField({
      name: "heroLinkLinePrimaryHref",
      title: "Hero Link — Primary Href",
      type: "string",
      initialValue: "https://www.farbetterbio.com/products",
    }),
    defineField({
      name: "heroLinkLineMiddle",
      title: "Hero Link — Middle Text",
      type: "string",
      description: 'Text between links, e.g. "and"',
    }),
    defineField({
      name: "heroLinkLineSecondaryLabel",
      title: "Hero Link — Secondary Label",
      type: "string",
      description: 'e.g. "cell isolation services"',
    }),
    defineField({
      name: "heroLinkLineSecondaryHref",
      title: "Hero Link — Secondary Href",
      type: "string",
      initialValue: "https://www.farbetterbio.com/services",
    }),
    defineField({
      name: "mainHeading",
      title: "Main Section Heading",
      type: "string",
      initialValue: "Contact Details",
    }),
    defineField({
      name: "formHeading",
      title: "Form Heading",
      type: "string",
      initialValue: "Send Us a Message",
    }),
    defineField({
      name: "contactInfoHeading",
      title: "Contact Info Heading",
      type: "string",
      initialValue: "Contact Information",
    }),
    defineField({
      name: "emailLabel",
      title: "Email Label",
      type: "string",
      initialValue: "Email",
    }),
    defineField({
      name: "phoneLabel",
      title: "Phone Label",
      type: "string",
      initialValue: "Phone",
    }),
    defineField({
      name: "addressLabel",
      title: "Address Label",
      type: "string",
      initialValue: "Address",
    }),
    defineField({
      name: "locationHeading",
      title: "Location Heading",
      type: "string",
      initialValue: "Our Location",
    }),
    defineField({
      name: "openMapLabel",
      title: "Open Map Button Label",
      type: "string",
      initialValue: "Open Map",
    }),
    defineField({
      name: "directionsLabel",
      title: "Directions Button Label",
      type: "string",
      initialValue: "Directions",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact Page" };
    },
  },
});
