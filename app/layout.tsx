import { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    process.env.NODE_ENV === "development"
      ? "Tidal Sites - Dev"
      : "Tidal Sites",
  description:
    "Welcome to Tidal Sites - Your Premier Web Services Partner in Hampton Roads, Virginia. Explore our top-tier web solutions including design, development, hosting, and branding. Elevate your online presence with our expert strategies and quality-focused services. Contact us today!",
};

export const viewpost: Viewport = {
  themeColor: "#ffffff",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          montserrat.className +
          " " +
          "bg-(--dark-theme) bg-[radial-gradient(ellipse_at_75%_25%,rgba(33,55,82,.2)_0%,rgba(0,0,0,.8)_80%,var(--dark-theme)_100%)]"
        }
      >
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive"
        />
        <Header />
        <main className="text-(--white)">
          <ToastContainer className="mt-(--navbar-height)" theme="dark" />
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
