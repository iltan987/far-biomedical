import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "mr2294zf",
  dataset: "production",
  apiVersion: "2025-04-22",
  useCdn: true,
  stega: {
    enabled: true,
    studioUrl: "/studio",
  },
});
