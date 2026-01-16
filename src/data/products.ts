import type { LucideIcon } from "lucide-react";
import { Activity, Beaker, Code, Magnet } from "lucide-react";
import type { StaticImageData } from "next/image";

import aphereCeiveImage from "@/images/home/aphere-ceive.jpeg";
import autoCeiveImage from "@/images/home/auto-ceive.jpeg";
import miniCeiveImage from "@/images/home/mini-ceive.jpeg";
import softwareToolsImage from "@/images/home/software-tools.jpeg";

export type Product = {
  title: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  badge: string;
  href: string;
  image?: StaticImageData;
};

export const products: Product[] = [
  {
    title: "MiniCeive",
    description:
      "MiniCeive is a compact laboratory device that enables fast and practical magnetic separation and liquid handling using magnet-based tubes and containers.",
    longDescription:
      "A compact laboratory device that enables fast and practical magnetic separation and liquid handling using magnet-based tubes and containers.",
    icon: Magnet,
    badge: "Coming Soon",
    href: "/products",
    image: miniCeiveImage,
  },
  {
    title: "AutoCeive",
    description:
      "Isolates targeted cells from blood or PBMC, using high-gradient magnetic separation. AutoCeive processes your input sample and delivers cells of interest as a ready-to-use output in a fully automated manner.",
    longDescription:
      "An automated benchtop blood-cell separation device designed for rapid, sterile, and efficient cell enrichment from fluid laboratory samples.",
    icon: Beaker,
    badge: "Coming Soon",
    href: "/products",
    image: autoCeiveImage,
  },
  {
    title: "AphereCeive",
    description:
      "AphereCeive aims to integrate magnetic isolation into continuous blood processing technology, to offer real-time target cell isolation from the patient for potential gene therapies and cellular treatments.",
    longDescription:
      "A programmable, cell-specific apheretic collection system enabling targeted isolation of immune and circulating cells directly from continuously processed blood.",
    icon: Activity,
    badge: "In Development",
    href: "/products",
    image: aphereCeiveImage,
  },
  {
    title: "Software Tools",
    description:
      "We work on developing software tools that optimize laboratory workflows, and accelerate certain analyses. Our goal is to provide researchers with efficient, reliable, and scalable digital solutions that increase productivity.",
    icon: Code,
    badge: "Coming Soon",
    href: "/products",
    image: softwareToolsImage,
  },
];
