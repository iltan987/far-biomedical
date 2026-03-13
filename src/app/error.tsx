"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="from-primary/5 via-background to-background relative flex min-h-[80vh] items-center overflow-hidden bg-linear-to-b">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary-glow),transparent)]" />

      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <FadeIn direction="none">
            <div className="mb-6 flex justify-center">
              <div className="bg-destructive/10 text-destructive flex h-16 w-16 items-center justify-center rounded-2xl">
                <AlertTriangle className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Something Went Wrong
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-md text-base leading-relaxed sm:text-lg">
              We encountered an unexpected error. Our team has been notified and
              is working to resolve the issue.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" onClick={reset} className="w-full sm:w-auto">
                <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
                Try Again
              </Button>
              <Button
                render={<Link href="/" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                  <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                  Back to Home
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
