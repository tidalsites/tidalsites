"use server";

import { ZodError } from "zod";
import { ContactSchema, type TContactSchema } from "./ContactSchema";
import { sendAuditResultsEmail, sendSESEmail } from "./ses";
import { TWebsiteAuditSchema, WebsiteAuditSchema } from "./AuditSchema";
import { revalidatePath } from "next/cache";

type EmailResponse = {
  success: boolean;
  error:
    | ZodError<TContactSchema>
    | null
    | "unknown"
    | "reCAPTCHA verification failed. Please try again.";
  pageSpeedReport?: any;
};

export const sendEmail = async (
  formData: TContactSchema
): Promise<EmailResponse> => {
  const validationResults = ContactSchema.safeParse(formData);

  if (!validationResults.success) {
    return { success: false, error: validationResults.error };
  }

  const sent = await sendSESEmail(formData);

  if (sent) {
    return { success: true, error: null };
  }

  return { success: false, error: "unknown" };
};

export const sendAuditResults = async (
  formData: TWebsiteAuditSchema,
  recaptchaToken: string
): Promise<EmailResponse> => {
  const validationResults = WebsiteAuditSchema.safeParse(formData);

  if (!validationResults.success) {
    return { success: false, error: validationResults.error };
  }

  // Verify reCAPTCHA before proceeding
  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return {
      success: false,
      error: "reCAPTCHA verification failed. Please try again.",
    };
  }

  const pageSpeedReport = await runPageSpeedReport(formData.website);
  const sent = await sendAuditResultsEmail(
    formData,
    pageSpeedReport.lighthouseResult
  );

  if (sent) {
    return { success: true, error: null, pageSpeedReport };
  }

  return { success: false, error: "unknown" };
};

export const runPageSpeedReport = async (url: string) => {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const response = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}&strategy=desktop&category=performance&category=seo&category=best-practices&category=accessibility`
  );

  return await response.json();
};

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    { method: "POST" }
  );
  const data = await response.json();

  return data.success && data.score > 0.5; // Ensure human-like behavior
}
