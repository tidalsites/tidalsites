import { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

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
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="bg-white dark:text-[--white] dark:bg-[--dark-theme] dark:bg-[radial-gradient(ellipse_at_75%_25%,rgba(33,55,82,.2)_0%,rgba(0,0,0,.8)_80%,var(--dark-theme)_100%)]">
          <ToastContainer className="mt-[--navbar-height]" />
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
