import { z } from "zod";

export const WebsiteAuditSchema = z.object({
  website: z.string().url("Please enter a valid URL (http:// or https://)"),
  email: z.string().email("Please enter a valid email address"),
});

export type TWebsiteAuditSchema = z.infer<typeof WebsiteAuditSchema>;
