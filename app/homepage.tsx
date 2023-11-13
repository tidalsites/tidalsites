// Components
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Highlights } from "@/components/Highlights";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Highlights />
    </>
  );
}
