import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "FAR Better Bio",
  description:
    "Advanced blood-cell separation and apheretic blood filtration technologies",
  url: "", // Set when domain is acquired

  contact: {
    email: "farbiomedical@gmail.com",
    phone: "+90 555 081 35 08",
    address: {
      line1: "ODTÜ Bilim ve İnovasyon Merkezi, Cozone",
      line2: "Mustafa Kemal Mahallesi, Çankaya",
      city: "Ankara",
      country: "Turkey",
      postalCode: "06510",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/in/farbetterbio",
    instagram: "https://www.instagram.com/farbetterbio",
  },

  location: {
    name: "ODTÜ Bilim ve İnovasyon Merkezi",
    // Placeholder coordinates for METU Teknokent, Ankara
    // To update: Change latitude and longitude to your exact location
    coordinates: {
      latitude: 39.9077973,
      longitude: 32.7499313,
    },
  },
};

export const instrumentCategories: Record<string, string> = {
  "fume-hoods": "Fume Hoods",
  ovens: "Ovens",
  incubators: "Incubators",
  "ultrasonic-baths": "Ultrasonic Baths",
  shakers: "Shakers",
  "vortex-mixers": "Vortex Mixers",
  pipettes: "Pipettes & Micropipettes",
  centrifuges: "Centrifuges",
  balances: "Balances",
  autoclaves: "Autoclaves",
  pumps: "Pumps",
};
