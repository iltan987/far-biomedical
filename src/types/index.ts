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

// Site Config
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      country: string;
      postalCode: string;
    };
  };
  social: {
    linkedin: string;
    instagram: string;
  };
  location: {
    name: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}

// Workflow Step
export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

// FAQ Item
export interface FAQItem {
  question: string;
  answer: string;
}
