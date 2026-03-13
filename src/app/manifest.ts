import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FAR Better Bio",
    short_name: "FAR Better Bio",
    description:
      "Advanced blood-cell separation and apheretic blood filtration technologies",
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
