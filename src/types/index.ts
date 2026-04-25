import type { StaticImageData } from "next/image";

// Navigation
export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

// Products
export interface LaboratoryInstrument {
  id: string;
  name: string;
  category: InstrumentCategory;
  specifications: string[];
  description?: string;
  image?: StaticImageData;
}

export type InstrumentCategory =
  | "fume-hoods"
  | "ovens"
  | "incubators"
  | "ultrasonic-baths"
  | "shakers"
  | "vortex-mixers"
  | "pipettes"
  | "centrifuges"
  | "balances"
  | "autoclaves"
  | "pumps";

export interface LaboratoryConsumable {
  id: string;
  name: string;
  description?: string;
  image?: StaticImageData;
}

// Team
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Workflow Step
export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  image?: StaticImageData;
}

// FAQ Item
export interface FAQItem {
  question: string;
  answer: string;
}
