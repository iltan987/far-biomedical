import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ScrollRestoration } from "@/components/scroll-restoration";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://farbetterbio.com"
  ),
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
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "FAR Better Bio - Blood Cell Separation Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAR Better Bio | Blood Cell Separation Technology",
    description:
      "Advanced blood-cell separation and apheretic blood filtration technologies.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
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
