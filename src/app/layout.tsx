import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { mergeKeywords, seoKeywordSets } from "@/lib/seo";
import { getBaseUrl } from "@/lib/site-url";
import { cn } from "@/lib/utils";
import { getSiteSettings } from "@/sanity/lib/site-settings";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const sitewideKeywords = mergeKeywords(
  seoKeywordSets.core,
  seoKeywordSets.manufacturerIntent,
  seoKeywordSets.discoveryIntent,
  seoKeywordSets.globalReach,
  seoKeywordSets.brand,
  seoKeywordSets.location,
  seoKeywordSets.products
);

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
  const baseUrl = getBaseUrl();
  const settingsPromise = getSiteSettings();
  return (
    <RootLayoutContent baseUrl={baseUrl} settingsPromise={settingsPromise}>
      {children}
    </RootLayoutContent>
  );
}

async function RootLayoutContent({
  children,
  baseUrl,
  settingsPromise,
}: Readonly<{
  children: React.ReactNode;
  baseUrl: string;
  settingsPromise: ReturnType<typeof getSiteSettings>;
}>) {
  const settings = await settingsPromise;
  const organizationId = `${baseUrl}/#organization`;

  const organizationSchema = {
    "@type": "Organization",
    "@id": organizationId,
    name: settings.siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: settings.siteDescription,
    alternateName: ["FAR Biomedical", "FAR Better"],
    email: settings.contactEmail,
    telephone: settings.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${settings.addressLine1}, ${settings.addressLine2}`,
      addressLocality: settings.city,
      postalCode: settings.postalCode,
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
    sameAs: [settings.linkedinUrl, settings.instagramUrl].filter(Boolean),
  };
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: settings.siteName,
    url: baseUrl,
    inLanguage: ["en", "tr"],
    publisher: {
      "@id": organizationId,
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
