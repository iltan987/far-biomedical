import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Far Biomedical",
  description:
    "Far Biomedical is a leading provider of innovative healthcare solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
