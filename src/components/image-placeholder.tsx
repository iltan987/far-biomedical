import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AspectRatio = "video" | "4/3" | "square";

interface ImagePlaceholderProps {
  aspectRatio?: AspectRatio;
  className?: string;
  label?: string;
}

const aspectClasses: Record<AspectRatio, string> = {
  video: "aspect-video",
  "4/3": "aspect-[4/3]",
  square: "aspect-square",
};

export function ImagePlaceholder({
  aspectRatio = "video",
  className,
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-muted flex flex-col items-center justify-center rounded-xl",
        aspectClasses[aspectRatio],
        className
      )}
      aria-hidden="true"
    >
      <ImageIcon className="text-muted-foreground/40 h-12 w-12" />
      {label && (
        <span className="text-muted-foreground/60 mt-2 text-sm">{label}</span>
      )}
    </div>
  );
}
