import type { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Our Products", href: "/products" },
      {
        name: "Laboratory Consumables",
        href: "/products/laboratory-consumables",
      },
      {
        name: "Laboratory Instruments",
        href: "/products/laboratory-instruments",
      },
    ],
  },
  { name: "Our Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Services", href: "/services" },
  ],
  products: [
    { name: "Our Products", href: "/products" },
    {
      name: "Laboratory Consumables",
      href: "/products/laboratory-consumables",
    },
    {
      name: "Laboratory Instruments",
      href: "/products/laboratory-instruments",
    },
  ],
};
