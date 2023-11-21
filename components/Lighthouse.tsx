"use client";

import { SiLighthouse } from "react-icons/si";
import { usePathname } from "next/navigation";
import { createLighthouseReport } from "@/lib/actions";

export const Lighthouse = () => {
  const path = usePathname();

  async function generateReport() {
    const results = await createLighthouseReport(
      `https://tidalsites.com/${path}`
    );

    if (results) {
      console.log(results);
    }
  }
  return (
    <button className="flex gap-2" onClick={generateReport}>
      <span>View Lighthouse Results</span>
      <SiLighthouse />
    </button>
  );
};
