"use client";

import "./globals.css";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Geist } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function GlobalError({
  error,
  reset: _reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-4 font-sans antialiased`}
      >
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-destructive/10 text-destructive flex h-16 w-16 items-center justify-center rounded-2xl">
              <AlertTriangle className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Something Went Wrong
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-base leading-relaxed sm:text-lg">
            We encountered a critical error. Please try refreshing the page or
            return to the home page.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-colors sm:w-auto"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Try Again
            </button>
            <Link
              href="/"
              className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex w-full items-center justify-center gap-2 rounded-md border px-6 py-2.5 text-sm font-medium transition-colors sm:w-auto"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
