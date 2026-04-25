import { clientEnv } from "@/env/client";
import { serverEnv } from "@/env/server";
import { siteConfig } from "@/lib/constants";

export function getBaseUrl(): string {
  if (clientEnv.NEXT_PUBLIC_SITE_URL) return clientEnv.NEXT_PUBLIC_SITE_URL;
  if (serverEnv.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${serverEnv.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (serverEnv.VERCEL_URL) return `https://${serverEnv.VERCEL_URL}`;
  return siteConfig.url;
}
