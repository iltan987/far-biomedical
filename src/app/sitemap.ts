import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-03-13");

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/products/laboratory-instruments",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/products/laboratory-consumables",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: "/team", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
