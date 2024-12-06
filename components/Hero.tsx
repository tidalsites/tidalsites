import { Rubik } from "next/font/google";
import Link from "next/link";
import { CTA } from "./cta";

const rubik = Rubik({ subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className="flex h-[100vh] w-full max-w-page mx-auto isolate bg-fixed bg-[url(/assets/images/mobile-bg.webp)] bg-black/60 bg-center bg-cover bg-blend-multiply md:bg-none md:bg-transparent">
      <div className="absolute inset-0 max-h-screen overflow-hidden -z-20 hidden md:block">
        <video
          className="absolute top-10 bottom-10 left-0 w-full h-[calc(100%-5rem)] object-cover shadow-[0_0_20px_-8px_white] opacity-40 -z-10"
          autoPlay
          loop
          muted
        >
          <source src="/assets/videos/hero.mp4" />
        </video>
      </div>
      <div className="lg:shadow-[0_0_20px_-8px_rgba(255,255,255,.25)] lg:backdrop-filter lg:backdrop-blur-[10px] lg:bg-[rgba(0,0,0,.25)] rounded-2xl py-10 px-4 flex-col gap-8 text-gray-100 sm:px-12 my-auto mx-auto text-center">
        <h1
          className={`flex flex-col lg:flex-row gap-2 text-4xl sm:text-5xl lg:text-6xl lg:py-8 lg:translate-y-[150%] [text-shadow:_0_0px_20px_rgba(255,255,255,.5),0_0px_30px_rgba(0,200,255,.5)] lg:animate-[shiftUp_750ms_linear_forwards] ${rubik.className} `}
        >
          DIGITAL SOLUTIONS. <span>YOUR WAY.</span>
        </h1>
        <p className="text-xl max-w-[60ch] lg:opacity-0 mt-8 lg:animate-[fadeIn_750ms_linear_750ms_forwards] text-left">
          At Tidal Sites, we believe a website should do more than just exist—it
          should work for you. That&apos;s why we focus on creating custom
          designs that not only look great but also help your business connect,
          engage, and grow.
        </p>
        <div className="flex flex-wrap justify-between items-center gap-4 mt-8 lg:mt-20 lg:bg-[rgba(0,0,0,.5)] outline outline-1 outline-[--theme] py-6 lg:px-6 rounded-full">
          <span className="ml-4 uppercase text-2xl border-b-[1px] border-[--theme] h-fit">
            Let&apos;s build it!
          </span>
          <CTA href="/contact" text="Get Quote" size="lg" />
        </div>
      </div>
    </section>
  );
};
