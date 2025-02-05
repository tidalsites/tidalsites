import { NextResponse } from "next/server";

const rateLimitCache = new Map();

export function middleware(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();

  // Only apply rate limiting to POST requests to the home route
  if (req.method === "POST" && req.url.includes("/api/audit")) {
    if (!rateLimitCache.has(ip)) {
      rateLimitCache.set(ip, []);
    }

    const requests = rateLimitCache
      .get(ip)
      .filter((timestamp: number) => now - timestamp < 86400000); // 24-hour window

    if (requests.length >= 1) {
      console.log("Rate limit exceeded. Please try again tomorrow.");
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: "Rate limit exceeded. Please try again tomorrow.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    requests.push(now);
    rateLimitCache.set(ip, requests);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/audit/", // Apply to home route (For audit form)
};
