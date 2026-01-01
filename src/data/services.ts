import type { LucideIcon } from "lucide-react";
import { FlaskConical, Microscope, Shield, Truck } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Sample Preparation",
    description:
      "Controlled collection, stabilization, and processing of blood samples.",
    icon: FlaskConical,
  },
  {
    title: "Cell Isolation",
    description:
      "Target cell isolation using proprietary device technology for high efficiency.",
    icon: Microscope,
  },
  {
    title: "Quality Control",
    description: "Viability testing, purity analysis, and microscopic imaging.",
    icon: Shield,
  },
  {
    title: "Delivery & Reporting",
    description: "Comprehensive analysis, documentation, and secure delivery.",
    icon: Truck,
  },
];
