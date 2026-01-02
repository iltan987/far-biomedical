import type { LucideIcon } from "lucide-react";
import { Activity, Beaker, Code, Magnet } from "lucide-react";

export type Product = {
  title: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  badge: string;
  href: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
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
    image: {
      src: "/images/home/img-3.jpeg",
      width: 1024,
      height: 1024,
    },
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
    image: {
      src: "/images/home/img-2.jpeg",
      width: 1365,
      height: 768,
    },
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
    image: {
      src: "/images/home/img-4.jpeg",
      width: 1365,
      height: 768,
    },
  },
  {
    title: "Software Tools",
    description:
      "We work on developing software tools that optimize laboratory workflows, and accelerate certain analyses. Our goal is to provide researchers with efficient, reliable, and scalable digital solutions that increase productivity.",
    icon: Code,
    badge: "Coming Soon",
    href: "/products",
    image: {
      src: "/images/home/img-5.jpeg",
      width: 1365,
      height: 768,
    },
  },
];
