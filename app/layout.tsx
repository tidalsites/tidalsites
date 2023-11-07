import { Metadata, Viewport } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-page mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
