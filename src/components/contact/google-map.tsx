import { ExternalLink, Navigation } from "lucide-react";

import { CtaAnchor } from "@/components/site/cta-link";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface GoogleMapProps {
  className?: string;
}

export function GoogleMap({ className }: GoogleMapProps) {
  const { latitude, longitude } = siteConfig.location.coordinates;

  // Google Maps embed URL with place marker for ODTÜ Bilim ve İnovasyon Merkezi
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.7938467854915!2d32.748980826364466!3d39.90746193280172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d5026bfabf%3A0x12ff20e2b9024f49!2sODT%C3%9C%20Bilim%20ve%20%C4%B0novasyon%20Merkezi!5e0!3m2!1str!2str!4v1766090275981!5m2!1str!2str";

  // Direct link to open in Google Maps (using place ID for accurate location)
  const directUrl = `https://maps.app.goo.gl/sS2FzQWZ4yLP9pHn9`;

  // Directions link
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=7Pcq5CSbxnNM2Jqt8`;

  return (
    <div className="space-y-4">
      {/* Map Embed */}
      <div
        className={cn(
          "bg-muted h-80 w-full overflow-hidden rounded-xl border sm:h-96",
          className
        )}
      >
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${siteConfig.location.name} Location`}
          className="h-full w-full"
        />
      </div>

      {/* Location Info & Actions */}
      <div className="bg-muted/50 flex flex-col items-start justify-between gap-4 rounded-lg p-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-semibold">{siteConfig.location.name}</h3>
          <p className="text-muted-foreground text-sm">
            {siteConfig.contact.address.line1},{" "}
            {siteConfig.contact.address.city}
          </p>
        </div>
        <div className="flex gap-2">
          <CtaAnchor
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open Map
          </CtaAnchor>
          <CtaAnchor
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            <Navigation className="mr-2 h-4 w-4" />
            Directions
          </CtaAnchor>
        </div>
      </div>
    </div>
  );
}
