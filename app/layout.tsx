import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
  title: {
    default: "FAR Better - Making Scientific Research More Accessible",
    template: "%s | FAR Better",
  },
  description:
    "Making scientific research more accessible with innovative laboratory solutions. Discover AutoCeive and advanced apheresis technologies for cell separation and gene therapies.",
  keywords: [
    "laboratory equipment",
    "scientific research",
    "cell separation",
    "AutoCeive",
    "apheresis",
    "gene therapy",
    "laboratory consumables",
    "laboratory instruments",
    "magnetic separation",
  ],
  authors: [{ name: "FAR Better" }],
  creator: "FAR Better",
  publisher: "FAR Better",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FAR Better",
    title: "FAR Better - Making Scientific Research More Accessible",
    description:
      "Innovative laboratory solutions including AutoCeive for cell separation and advanced apheresis technologies.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FAR Better Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAR Better - Making Scientific Research More Accessible",
    description:
      "Innovative laboratory solutions including AutoCeive for cell separation and advanced apheresis technologies.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
