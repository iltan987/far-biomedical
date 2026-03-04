import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ScrollRestoration } from "@/components/scroll-restoration";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { clientEnv } from "@/env/client";
import { serverEnv } from "@/env/server";
import { siteConfig } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    "FAR Better Bio is an R&D company developing advanced blood-cell separation and apheretic blood filtration technologies. Specializing in AutoCeive and AphereCeive platforms for research and clinical applications.",
  keywords: [
    "blood cell separation",
    "apheresis",
    "cell isolation",
    "biomedical research",
    "laboratory equipment",
    "PBMC isolation",
    "AutoCeive",
    "AphereCeive",
    "METU Teknokent",
    "ODTU Bilim ve Inovasyon Merkezi",
    "ODTÜ Bilim ve İnovasyon Merkezi",
    "METU Science and Innovation Center",
    "laboratory instruments",
    "laboratory consumables",
  ],
  authors: [{ name: "FAR Better Bio" }],
  creator: "FAR Better Bio",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FAR Better Bio",
    title: "FAR Better Bio | Blood Cell Separation Technology",
    description:
      "Advanced blood-cell separation and apheretic blood filtration technologies for research and clinical applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAR Better Bio | Blood Cell Separation Technology",
    description:
      "Advanced blood-cell separation and apheretic blood filtration technologies.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
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
    sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollRestoration />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
