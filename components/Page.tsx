import AdsTag from "./AdsTag";
import AnalyticsTag from "./AnalyticsTag";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnalyticsTag />
      <AdsTag />
      {children}
    </>
  );
}
