import type { LucideIcon } from "lucide-react";
import { Activity, Beaker, Code, Magnet } from "lucide-react";

export type Product = {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  href: string;
};

export const products: Product[] = [
  {
    title: "MiniCeive",
    description:
      "MiniCeive is a compact laboratory device that enables fast and practical magnetic separation and liquid handling using magnet-based tubes and containers.",
    icon: Magnet,
    badge: "Coming Soon",
    href: "/products",
  },
  {
    title: "AutoCeive",
    description:
      "Isolates targeted cells from blood or PBMC, using high-gradient magnetic separation. AutoCeive processes your input sample and delivers cells of interest as a ready-to-use output in a fully automated manner.",
    icon: Beaker,
    badge: "Coming Soon",
    href: "/products",
  },
  {
    title: "AphereCeive",
    description:
      "AphereCeive aims to integrate magnetic isolation into continuous blood processing technology, to offer real-time target cell isolation from the patient for potential gene therapies and cellular treatments.",
    icon: Activity,
    badge: "In Development",
    href: "/products",
  },
  {
    title: "Software Tools",
    description:
      "We work on developing software tools that optimize laboratory workflows, and accelerate certain analyses. Our goal is to provide researchers with efficient, reliable, and scalable digital solutions that increase productivity.",
    icon: Code,
    badge: "Coming Soon",
    href: "/products",
  },
];
