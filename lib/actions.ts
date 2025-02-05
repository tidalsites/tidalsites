"use server";

import { ZodError } from "zod";
import { ContactSchema, type TContactSchema } from "./ContactSchema";
import { sendSESEmail } from "./ses";
import { verifyCaptchaToken } from "@/utils/captcha";

export type EmailResponse = {
  success: boolean;
  error:
    | ZodError<TContactSchema>
    | null
    | Error
    | "unknown"
    | "reCAPTCHA verification failed. Please try again."
    | "Token not found"
    | "Request timed out";
  pageSpeedReport?: any;
};

export const sendEmail = async (
  formData: TContactSchema,
  token: string | null
): Promise<EmailResponse> => {
  if (!token) {
    return {
      success: false,
      error: "Token not found",
    };
  }
  const validationResults = ContactSchema.safeParse(formData);

  if (!validationResults.success) {
    return { success: false, error: validationResults.error };
  }

  // Verify reCAPTCHA before proceeding
  const isHuman = await verifyCaptchaToken(token);
  if (!isHuman) {
    return {
      success: false,
      error: "reCAPTCHA verification failed. Please try again.",
    };
  }

  const sent = await sendSESEmail(formData);

  if (sent) {
    return { success: true, error: null };
  }

  return { success: false, error: "unknown" };
};
