"use server";

import { ZodError } from "zod";
import { ContactSchema, type TContactSchema } from "./ContactSchema";
import { sendAuditResultsEmail, sendSESEmail } from "./ses";
import { TWebsiteAuditSchema, WebsiteAuditSchema } from "./AuditSchema";
import { verifyCaptchaToken } from "@/utils/captcha";

type EmailResponse = {
  success: boolean;
  error:
    | ZodError<TContactSchema>
    | null
    | "unknown"
    | "reCAPTCHA verification failed. Please try again."
    | "Token not found";
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
  recaptchaToken: string | null
): Promise<EmailResponse> => {
  if (!recaptchaToken) {
    return {
      success: false,
      error: "Token not found",
    };
  }

  // Server side form validation
  const validationResults = WebsiteAuditSchema.safeParse(formData);

  if (!validationResults.success) {
    return { success: false, error: validationResults.error };
  }

  // Verify reCAPTCHA before proceeding
  const isHuman = await verifyCaptchaToken(recaptchaToken);
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
