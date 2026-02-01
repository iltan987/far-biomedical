import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    GMAIL_USER: z.email(),
    GMAIL_APP_PASSWORD: z.string().min(1),
    CONTACT_EMAIL_TO: z.email().optional(),
    SEND_CONFIRMATION_EMAIL: z
      .enum(["true", "false"])
      .transform((val) => val === "true")
      .optional()
      .default(true),
    VERCEL_URL: z.string().optional(),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  },
  runtimeEnv: {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
    CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
    SEND_CONFIRMATION_EMAIL: process.env.SEND_CONFIRMATION_EMAIL,
    VERCEL_URL: process.env.VERCEL_URL,
    VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  },
});
