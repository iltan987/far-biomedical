"use client";

import { MapPinned } from "lucide-react";
import { useState } from "react";

import { CtaButton } from "@/components/site/cta-link";
import { cn } from "@/lib/utils";

interface DeferredMapEmbedProps {
  embedUrl: string;
  title: string;
  className?: string;
}

export function DeferredMapEmbed({
  embedUrl,
  title,
  className,
}: DeferredMapEmbedProps) {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  return (
    <div
      className={cn(
        "bg-muted h-80 w-full overflow-hidden rounded-xl border sm:h-96",
        className
      )}
    >
      {shouldLoadMap ? (
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          className="h-full w-full"
        />
      ) : (
        <div className="from-muted to-muted/70 flex h-full flex-col items-center justify-center bg-linear-to-b px-6 text-center">
          <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
            <MapPinned className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold">Map preview is ready</h3>
          <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed">
            Load the map whenever you want to view our exact location here.
          </p>
          <CtaButton
            className="mt-5"
            onClick={() => setShouldLoadMap(true)}
            aria-label="Load Google Map"
          >
            Load Map
          </CtaButton>
        </div>
      )}
    </div>
  );
}
