import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FAR Better Bio",
    short_name: "FAR Better Bio",
    description:
      "Turkiye biomedical R&D company developing apheresis and aferez-focused blood-cell separation technologies",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#dc2626",
    icons: [
      {
        src: "/logo.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
