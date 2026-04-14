import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { clientEnv } from "@/env/client";
import { serverEnv } from "@/env/server";
import { siteConfig } from "@/lib/constants";
import { mergeKeywords, seoKeywordSets } from "@/lib/seo";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const sitewideKeywords = mergeKeywords(
  seoKeywordSets.core,
  seoKeywordSets.manufacturerIntent,
  seoKeywordSets.globalReach,
  seoKeywordSets.brand,
  seoKeywordSets.location,
  seoKeywordSets.products
);

const getBaseUrl = () => {
  if (clientEnv.NEXT_PUBLIC_SITE_URL) return clientEnv.NEXT_PUBLIC_SITE_URL;
  if (serverEnv.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${serverEnv.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (serverEnv.VERCEL_URL) return `https://${serverEnv.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "FAR Better Bio | Blood Cell Separation Technology",
    template: "%s | FAR Better Bio",
  },
  description:
    "FAR Better Bio is a biomedical R&D company based in Turkiye, developing apheresis and aferez-focused blood-cell separation technologies for global research and medical device workflows.",
  keywords: sitewideKeywords,
  authors: [{ name: "FAR Better Bio" }],
  creator: "FAR Better Bio",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
    siteName: "FAR Better Bio",
    title: "FAR Better Bio | Blood Cell Separation Technology",
    description:
      "Biomedical R&D company based in Turkiye, developing apheresis and aferez-oriented blood-cell separation technologies for global research and medical device applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAR Better Bio | Blood Cell Separation Technology",
    description:
      "Turkiye-based biomedical company serving global partners with apheresis and aferez-focused cell separation technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "Country", name: "Turkey" },
      { "@type": "Place", name: "Worldwide" },
    ],
    availableLanguage: ["en", "tr"],
    knowsAbout: [
      "Apheresis",
      "Aferez",
      "Blood Cell Separation",
      "Target Cell Isolation",
      "Biomedical R&D",
      "Medical Device Development",
    ],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
  };
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["en", "tr"],
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    description:
      "Turkiye-based biomedical R&D website for global apheresis and aferez device development, laboratory products, and isolation services.",
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
