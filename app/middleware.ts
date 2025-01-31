import { NextResponse } from "next/server";

const rateLimitCache = new Map();

export function middleware(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();

  if (!rateLimitCache.has(ip)) {
    rateLimitCache.set(ip, []);
  }

  const requests = rateLimitCache
    .get(ip)
    .filter((timestamp: number) => now - timestamp < 600000); // 10 min window
  requests.push(now);
  rateLimitCache.set(ip, requests);

  if (requests.length > 5) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*", // Apply to all API routes
};
