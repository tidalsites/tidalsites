"use client";

// Components
import { Hero } from "../components/Home/Sections/Hero";
import { Services } from "../components/Home/Sections/Services";
import { Highlights } from "../components/Home/Sections/Highlights";
import { Process } from "../components/Home/Sections/Process";
import { Portfolio } from "../components/Home/Sections/Portfolio";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Highlights />
    </div>
  );
}
