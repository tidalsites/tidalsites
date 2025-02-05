import { EmailResponse } from "@/lib/actions";
import { TWebsiteAuditSchema, WebsiteAuditSchema } from "@/lib/AuditSchema";
import { sendAuditResultsEmail } from "@/lib/ses";
import { verifyCaptchaToken } from "@/utils/captcha";
import { NextResponse } from "next/server";

const TIMEOUT_DURATION = 300000; // 30 seconds - This is the function invocation time limit set in Vercel

const sendAuditResults = async (
  formData: TWebsiteAuditSchema,
  recaptchaToken: string | null
): Promise<EmailResponse> => {
  // Helper function to create a timeout promise
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), TIMEOUT_DURATION)
  );

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

  try {
    // Verify reCAPTCHA before proceeding
    const isHuman = await verifyCaptchaToken(recaptchaToken);
    if (!isHuman) {
      return {
        success: false,
        error: "reCAPTCHA verification failed. Please try again.",
      };
    }

    // Run the main logic with a timeout
    const result = await Promise.race([
      (async () => {
        const pageSpeedReport = await runPageSpeedReport(formData.website);
        const sent = await sendAuditResultsEmail(
          formData,
          pageSpeedReport.lighthouseResult
        );

        if (sent) {
          return { success: true, error: null, pageSpeedReport };
        }

        return { success: false, error: "unknown" };
      })(),
      timeoutPromise,
    ]);

    return result as EmailResponse;
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error };
    }

    return { success: false, error: "unknown" };
  }
};

export const runPageSpeedReport = async (url: string) => {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const response = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}&strategy=desktop&category=performance&category=seo&category=best-practices&category=accessibility`
  );

  return await response.json();
};

export async function POST(req: Request) {
  const res = await req.json();

  const { data, token } = res;

  if (!data || !token) {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }

  const result = await sendAuditResults(data, token);

  //   More verbose response based on results
  if (result.success) {
    return NextResponse.json({ ...result }, { status: 200 });
  } else {
    if (
      result.error === "Token not found" ||
      result.error === "reCAPTCHA verification failed. Please try again."
    ) {
      return NextResponse.json({ ...result }, { status: 403 });
    }

    return NextResponse.json({ ...result }, { status: 500 });
  }
}
