import AnalyticsTag from "@/components/AnalyticsTag";
import AdsTag from "@/components/AdsTag";
import { Metadata } from "next";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Tidal Sites | Blog",
  description:
    "Welcome to the Tidal Sites blog, where we share insights and tips on web design, development, and digital marketing. Stay updated with our latest articles and learn how to enhance your online presence.",
};

export default function BlogPage() {
  return (
    <>
      <AnalyticsTag />
      <AdsTag />
      <BlogContent />
    </>
  );
}
