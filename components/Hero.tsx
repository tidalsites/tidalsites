import Image from "next/image";
import { Rubik } from "next/font/google";
import illustration from "@/public/assets/images/splash-illustration.svg";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });

export const Hero = () => {
  const emailBody =
    "First Name: %0aLast Name: %0aPhone Number: %0aEmail: %0a%0aPlease describe what service or services Tidal Sites can help you with: %0a";

  return (
    <section className="flex h-[100vh] w-full max-w-page mx-auto isolate">
      <video
        className="absolute top-10 bottom-10 left-0 w-full h-[calc(100%-5rem)] object-cover shadow-[0_0_20px_-8px_white] opacity-40 -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/assets/videos/hero.mp4" />
      </video>
      <div className="shadow-[0_0_20px_-8px_rgba(255,255,255,.25)] backdrop-filter backdrop-blur-[10px] dark:bg-[rgba(0,0,0,.25)] rounded-2xl py-10 px-4 flex-col gap-8 text-gray-800 dark:text-gray-100 sm:px-12 my-auto mx-auto text-center">
        <h1
          className={`flex gap-2 text-4xl sm:text-5xl lg:text-6xl lg:py-8 lg:translate-y-[150%] [text-shadow:_0_0px_20px_rgba(255,255,255,.5),0_0px_30px_rgba(0,200,255,.5)] lg:animate-[shiftUp_750ms_linear_forwards] ${rubik.className} `}
        >
          ELEVATE YOUR DIGITAL EXPERIENCE
        </h1>
        <p className="text-xl max-w-[60ch] lg:opacity-0 mt-8 lg:animate-[fadeIn_750ms_linear_750ms_forwards] text-left">
          At Tidal Sites, we believe a website should do more than just exist—it
          should work for you. That&apos;s why we focus on creating custom
          designs that not only look great but also help your business connect,
          engage, and grow.
        </p>
        <div className="flex justify-between gap-4 mt-20 bg-[rgba(0,0,0,.25)] py-6 px-4 rounded-2xl">
          <span className="uppercase text-2xl border-b-[1px] border-[--theme]">
            Let&apos;s build something amazing together.
          </span>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="text-lg flex items-center rounded px-4 py-1 bg-[radial-gradient(circle_at_0_100%,rgba(0,150,200,.5),rgba(0,200,255,.5))] [text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] outline outline-1 outline-offset-[3px] outline-[rgba(0,200,255,.5)] hover:outline-offset-4 hover:outline-1 focus:outline-offset-2 hover:bg-[radial-gradient(circle_at_25%_75%,rgba(0,150,200,.45),rgba(0,200,255,.45))] transistion-all duration-100"
            >
              Get Quote
            </Link>
            <a
              href="tel:757-550-0830"
              className="text-lg flex items-center rounded px-4 py-1 [text-shadow:_0_0px_8px_rgba(255,255,255,.5),0_0px_12px_rgba(0,200,255,.5)] outline-double outline-4 outline-[rgba(0,200,255,.5)] hover:outline-offset-2 focus:outline-offset-2 transistion-all duration-100"
            >
              Call now
            </a>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block mt-[140px] absolute right-0 -z-10 max-w-[100vw] max-h-[500px] px-4">
        <Image src={illustration} alt="" height="875" width="740" priority />
      </div> */}
    </section>
  );
};
