import { NextResponse } from "next/server";

const rateLimitCache = new Map();

export function middleware(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();

  console.log("Middleware", req.method, req.url, ip);

  // Only apply rate limiting to POST requests to the home route
  if (req.method === "POST" && req.url === "/") {
    if (!rateLimitCache.has(ip)) {
      rateLimitCache.set(ip, []);
    }

    const requests = rateLimitCache
      .get(ip)
      .filter((timestamp: number) => now - timestamp < 86400000); // 24-hour window

    if (requests.length >= 1) {
      return new NextResponse(
        "Rate limit exceeded. Please try again tomorrow.",
        {
          status: 429,
        }
      );
    }

    requests.push(now);
    rateLimitCache.set(ip, requests);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/", // Apply to home route (For audit form)
};
