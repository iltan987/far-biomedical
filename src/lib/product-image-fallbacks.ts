import type { StaticImageData } from "next/image";

import aphereCeiveImage from "@/images/home/aphere-ceive.jpeg";
import autoCeiveImage from "@/images/home/auto-ceive.jpeg";
import miniCeiveImage from "@/images/home/mini-ceive.jpeg";
import softwareToolsImage from "@/images/home/software-tools.jpeg";

const productImageFallbacks: Record<string, StaticImageData> = {
  miniceive: miniCeiveImage,
  autoceive: autoCeiveImage,
  aphereceive: aphereCeiveImage,
  "software-tools": softwareToolsImage,
};

function normalizeProductKey(value: string) {
  return value
    .toLowerCase()
    .replace(/^product-/, "")
    .replace(/[^a-z0-9-]/g, "");
}

export function getProductImageFallback(value?: string | null) {
  if (!value) {
    return undefined;
  }

  const normalized = normalizeProductKey(value);
  return productImageFallbacks[normalized];
}
