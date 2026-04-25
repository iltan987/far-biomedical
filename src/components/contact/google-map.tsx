import { ExternalLink, Navigation } from "lucide-react";

import { DeferredMapEmbed } from "@/components/contact/deferred-map-embed";
import { CtaAnchor } from "@/components/site/cta-link";

interface GoogleMapProps {
  className?: string;
  embedUrl: string;
  directUrl: string;
  directionsUrl: string;
  locationName: string;
  addressLine1: string;
  city: string;
  openMapLabel?: string;
  directionsLabel?: string;
  embedAttr?: string;
  locationNameAttr?: string;
  addressAttr?: string;
  openMapLabelAttr?: string;
  directionsLabelAttr?: string;
}

export function GoogleMap({
  className,
  embedUrl,
  directUrl,
  directionsUrl,
  locationName,
  addressLine1,
  city,
  openMapLabel = "Open Map",
  directionsLabel = "Directions",
  embedAttr,
  locationNameAttr,
  addressAttr,
  openMapLabelAttr,
  directionsLabelAttr,
}: GoogleMapProps) {
  return (
    <div className="space-y-4">
      <div data-sanity={embedAttr}>
        <DeferredMapEmbed
          embedUrl={embedUrl}
          title={`${locationName} Location`}
          className={className}
        />
      </div>

      <div className="bg-muted/50 flex flex-col items-start justify-between gap-4 rounded-lg p-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-semibold" data-sanity={locationNameAttr}>
            {locationName}
          </h3>
          <p className="text-muted-foreground text-sm" data-sanity={addressAttr}>
            {addressLine1}, {city}
          </p>
        </div>
        <div className="flex gap-2">
          <CtaAnchor
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            data-sanity={openMapLabelAttr}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {openMapLabel}
          </CtaAnchor>
          <CtaAnchor
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            data-sanity={directionsLabelAttr}
          >
            <Navigation className="mr-2 h-4 w-4" />
            {directionsLabel}
          </CtaAnchor>
        </div>
      </div>
    </div>
  );
}
