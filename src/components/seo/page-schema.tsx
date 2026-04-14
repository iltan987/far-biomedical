import { siteConfig } from "@/lib/constants";

type PageSchemaType = "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";

interface PageSchemaProps {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: PageSchemaType;
}

export function PageSchema({
  path,
  title,
  description,
  keywords,
  type = "WebPage",
}: PageSchemaProps) {
  const url = `${siteConfig.url}${path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url,
    inLanguage: ["en", "tr"],
    keywords: keywords?.join(", "),
    audience: {
      "@type": "Audience",
      audienceType: "Global biomedical researchers and medical device teams",
    },
    areaServed: [
      { "@type": "Country", name: "Turkey" },
      { "@type": "Place", name: "Worldwide" },
    ],
    about: [
      { "@type": "Thing", name: "Apheresis" },
      { "@type": "Thing", name: "Aferez" },
      { "@type": "Thing", name: "Biomedical R&D" },
    ],
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
