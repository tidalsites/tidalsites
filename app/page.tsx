import HomePage from "./homepage";
import AnalyticsTag from "@/components/AnalyticsTag";
import AdsTag from "@/components/AdsTag";

export default async function Page() {
  return (
    <>
      <AnalyticsTag />
      <AdsTag />
      <HomePage />
    </>
  );
}
