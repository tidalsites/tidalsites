"use server";

import { config, SES } from "aws-sdk";
import { SendEmailRequest } from "aws-sdk/clients/ses";
import { TContactSchema } from "./ContactSchema";
import { TWebsiteAuditSchema } from "./AuditSchema";

config.credentials = {
  accessKeyId: process.env.SES_ACCESS_KEY || "",
  secretAccessKey: process.env.SES_SECRET_ACCESS_KEY || "",
};

config.update({
  region: "us-east-1",
});

export async function sendSESEmail(formData: TContactSchema) {
  let sent = false;

  const { first_name, last_name, email, phone, description } = formData;
  try {
    const params: SendEmailRequest = {
      Destination: {
        ToAddresses: ["devin@tidalsites.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: generateTemplateEmail({
              first_name,
              last_name,
              email,
              phone,
              description,
              company: formData.company_name
                ? formData.company_name
                : "None Specified",
            }),
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Contact Request",
        },
      },
      Source: "devin@tidalsites.com",
    };

    const ses = new SES({ apiVersion: "2010-12-01" }).sendEmail(params);

    await ses.promise();
    sent = true;
  } catch (e) {
    console.log(e);
  }

  return sent;
}

export async function sendAuditResultsEmail(
  formData: TWebsiteAuditSchema,
  lighthouseResult: LighthouseResult
) {
  let sent = false;

  const { email, website } = formData;
  try {
    const params: SendEmailRequest = {
      Destination: {
        ToAddresses: [email],
        CcAddresses: ["devin@tidalsites.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: generatePageSpeedEmail({
              url: website,
              lighthouseResult,
            }),
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Website Audit Request",
        },
      },
      Source: "devin@tidalsites.com",
    };

    const ses = new SES({ apiVersion: "2010-12-01" }).sendEmail(params);

    await ses.promise();
    sent = true;
  } catch (e) {
    console.log(e);
  }

  return sent;
}

type EmailParameters = {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
};

function generateTemplateEmail({
  first_name,
  last_name,
  company,
  email,
  phone,
  description,
}: EmailParameters) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body>
            <main style="display: flex; flex-direction: column; gap: 1rem;">
                <p>Contact Form Request from ${first_name} ${last_name}</p>
                <p>Company Name: ${company}</p>
                <p>Email Address: ${email}</p>
                <p>Phone Number: ${phone}</p>
                <p>Description: ${description}</p>
            </main>
        </body>
    </html>
`;
}

type MetricsItem = {
  observedFirstContentfulPaintAllFramesTs: number;
  cumulativeLayoutShiftMainFrame: number;
  firstContentfulPaint: number;
  maxPotentialFID: number;
  observedDomContentLoadedTs: number;
  observedFirstContentfulPaintTs: number;
  observedNavigationStartTs: number;
  cumulativeLayoutShift: number;
  interactive: number;
  observedFirstVisualChange: number;
  observedLargestContentfulPaint: number;
  observedCumulativeLayoutShiftMainFrame: number;
  observedTimeOriginTs: number;
  observedFirstPaint: number;
  timeToFirstByte: number;
  observedTraceEnd: number;
  observedDomContentLoaded: number;
  observedLoadTs: number;
  observedLargestContentfulPaintAllFrames: number;
  observedSpeedIndexTs: number;
  observedFirstVisualChangeTs: number;
  observedFirstPaintTs: number;
  observedFirstContentfulPaint: number;
  observedNavigationStart: number;
  largestContentfulPaint: number;
  observedSpeedIndex: number;
  speedIndex: number;
  observedLargestContentfulPaintAllFramesTs: number;
  observedLoad: number;
  observedTraceEndTs: number;
  totalBlockingTime: number;
  observedTimeOrigin: number;
  observedLastVisualChangeTs: number;
  observedCumulativeLayoutShift: number;
  observedLargestContentfulPaintTs: number;
  observedLastVisualChange: number;
  observedFirstContentfulPaintAllFrames: number;
};

type LighthouseResult = {
  categories: {
    performance: { score: number };
    accessibility: { score: number };
    "best-practices": { score: number };
    seo: { score: number };
  };
  audits: {
    metrics: {
      details: {
        items: [MetricsItem, {}];
      };
    };
  };
};

function generatePageSpeedEmail({
  url,
  lighthouseResult,
}: {
  url: string;
  lighthouseResult: LighthouseResult;
}) {
  const { performance, accessibility, seo } = lighthouseResult.categories;

  const bestPractices = lighthouseResult.categories["best-practices"];

  const {
    metrics: {
      details: { items },
    },
  } = lighthouseResult.audits;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>PageSpeed Insights Report</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0; }
          .container { width: 100%; max-width: 600px; margin: 20px; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
          h2 { text-align: center; color: #333; }
          .score-container { display: flex; text-align: center; padding: 10px 0;}
          .card { flex: 1; padding: 10px; background: #f9f9f9; border-radius: 10px; min-width: 200px; margin-right: 20px; }
          .score { font-size: 20px; font-weight: bold; padding: 10px; border-radius: 50%; width: 50px; height: 50px; margin: 0 auto;}
          .category { font-size: 16px; font-weight: bold; }
          .table { margin: 0 auto; }
          .td { vertical-align: middle; }
          .vitals-table { width: 100%; border-spacing: 1rem; }
          .vitals-data { border-radius: 5px; background: #e9e9e9; overflow: hidden; }
          .p-2 { padding: 0 10px; }
          .metric-status { font-size: 14px; text-align: center; padding: 0; margin: 0; }
          .metric-green { background-color: #28a745; color: #fff; }
          .metric-yellow { background-color: #ffc107; color: #000; }
          .metric-red { background-color: #dc3545; color: #fff; }
          .green { border: 10px solid #28a745; }
          .yellow { border: 10px solid #ffc107; }
          .red { border: 5px solid #dc3545; }
          .section { margin-top: 20px; padding: 10px; background: #f9f9f9; border-radius: 5px; }
          .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
          .closing { margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Website Audit Report</h2>
          <p><strong>URL:</strong> <a href="${url}" target="_blank">${url}</a></p>
          <div class="score-container">
            <div class="card">
              <p class="category">Performance</p> 
              <table class="table">
                <tr>
                  <td class="td score ${getScoreColor(
                    performance.score
                  )}">${Math.round(performance.score * 100)}
                  </td>
                </tr>
              </table>
            </div>
            <div class="card">
              <p class="category">Accessibility</p>
              <table class="table">
                <tr>
                  <td class="td score ${getScoreColor(
                    accessibility.score
                  )}">${Math.round(accessibility.score * 100)}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="score-container">
            <div class="card">
              <p class="category">Best Practices</p>
              <table class="table">
                <tr>
                  <td class="td score ${getScoreColor(
                    bestPractices.score
                  )}">${Math.round(bestPractices.score * 100)}
                  </td>
                </tr>
              </table>
            </div>
            <div class="card">
              <p class="category">SEO</p>
              <table class="table">
                <tr>
                  <td class="td score ${getScoreColor(seo.score)}">${Math.round(
    seo.score * 100
  )}
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="section">
            <h3>Core Web Vitals</h3>
            <table class="vitals-table">
              <tr>
                <td class="vitals-data">
                    <p class="p-2"><strong>First Contentful Paint (FCP)</strong></p>
                    <p class="p-2">${(
                      items[0].firstContentfulPaint / 1000
                    ).toFixed(2)} seconds</p>
                    <p class="metric-status metric-${getMetricColor(
                      "fcp",
                      items[0].firstContentfulPaint
                    )}">${getMetricResult(
    "fcp",
    items[0].firstContentfulPaint
  )}</p>
                </td>
                <td class="vitals-data">
                    <p class="p-2"><strong>Largest Contentful Paint (LCP)</strong></p>
                    <p class="p-2">${(
                      items[0].largestContentfulPaint / 1000
                    ).toFixed(2)} seconds</p>
                    <p class="metric-status metric-${getMetricColor(
                      "lcp",
                      items[0].largestContentfulPaint
                    )}">${getMetricResult(
    "lcp",
    items[0].largestContentfulPaint
  )}</p>
                </td>
              </tr>
              <tr>
                  <td class="vitals-data">
                      <p class="p-2"><strong>Cumulative Layout Shift (CLS)</strong></p>
                      <p class="p-2">${items[0].cumulativeLayoutShift.toFixed(
                        2
                      )}</p>
                      <p class="metric-status metric-${getMetricColor(
                        "cls",
                        items[0].cumulativeLayoutShift
                      )}">${getMetricResult(
    "cls",
    items[0].cumulativeLayoutShift
  )}</p>
                  </td>
                  <td class="vitals-data">
                      <p class="p-2"><strong>Total Blocking Time (TBT)</strong></p>
                      <p class="p-2">${items[0].totalBlockingTime.toFixed(
                        2
                      )} ms</p>
                      <p class="metric-status metric-${getMetricColor(
                        "tbt",
                        items[0].totalBlockingTime
                      )}">${getMetricResult(
    "tbt",
    items[0].totalBlockingTime
  )}</p>
                  </td>
              </tr>
              <tr>
                  <td class="vitals-data">
                      <p class="p-2"><strong>Speed Index</strong></p>
                      <p class="p-2">${(items[0].speedIndex / 1000).toFixed(
                        2
                      )} seconds</p>
                      <p class="metric-status metric-${getMetricColor(
                        "si",
                        items[0].speedIndex
                      )}">${getMetricResult("si", items[0].speedIndex)}</p>
                  </td>
              </tr>
          </div>

          <div class="footer">
            <p>Generated by PageSpeed Insights API</p>
          </div>
          <div class="closing">
            <p>Thank you for using our automated website auditing tool. We use this tool, among others, to ensure our products meet the highest quality standards.</p>
            <p>To learn more about the underlying technology behind this audit, explore the <a href="https://developers.google.com/speed/docs/insights/v5/get-started" target="_blank">Google PageSpeed Insights API</a>.</p>
            <p>If you're interested in a more in-depth analysis of your website, including mobile responsiveness, layout design, performance optimization, and more, our team is here to help. Please reach out to us at <a href="mailto:devin@tidalsites.com">devin@tidalsites.com</a> for further assistance.</p>
            <p>We look forward to helping you enhance your online presence!</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Function to determine score color based on range
function getScoreColor(score: number): "green" | "yellow" | "red" {
  if (score >= 0.9) return "green"; // 90-100
  if (score >= 0.5) return "yellow"; // 50-89
  return "red"; // 0-49
}

type MetricType = "fcp" | "lcp" | "cls" | "tbt" | "si";

// Function to determine metric results based on range
function getMetricResult(
  type: MetricType,
  value: number
): "Good" | "Needs Improvement" | "Poor" {
  switch (type) {
    case "fcp":
      return value < 900 ? "Good" : value < 1600 ? "Needs Improvement" : "Poor";
    case "lcp":
      return value < 1200
        ? "Good"
        : value < 2400
        ? "Needs Improvement"
        : "Poor";
    case "cls":
      return value < 0.1 ? "Good" : value < 0.25 ? "Needs Improvement" : "Poor";
    case "tbt":
      return value < 150 ? "Good" : value < 350 ? "Needs Improvement" : "Poor";
    case "si":
      return value < 1300
        ? "Good"
        : value < 2300
        ? "Needs Improvement"
        : "Poor";
  }
}

function getMetricColor(
  type: MetricType,
  value: number
): "green" | "yellow" | "red" {
  switch (type) {
    case "fcp":
      return value < 900 ? "green" : value < 1600 ? "yellow" : "red";
    case "lcp":
      return value < 1200 ? "green" : value < 2400 ? "yellow" : "red";
    case "cls":
      return value < 0.1 ? "green" : value < 0.25 ? "yellow" : "red";
    case "tbt":
      return value < 150 ? "green" : value < 350 ? "yellow" : "red";
    case "si":
      return value < 1300 ? "green" : value < 2300 ? "yellow" : "red";
  }
}
