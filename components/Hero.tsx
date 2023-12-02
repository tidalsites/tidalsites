import Image from "next/image";
import { Rubik } from "next/font/google";
import illustration from "@/public/assets/images/splash-illustration.svg";
import Link from "next/link";

const rubik = Rubik({ subsets: ["latin"] });

export const Hero = () => {
  const emailBody =
    "First Name: %0aLast Name: %0aPhone Number: %0aEmail: %0a%0aPlease describe what service or services Tidal Sites can help you with: %0a";

  return (
    <section className="flex h-[100vh] w-full relative max-w-page mx-auto">
      <div className="flex self-center bg-white/80 rounded-2xl py-10 flex-col gap-4 content-center text-gray-800 px-4 sm:px-12 my-auto mx-auto md:mx-0">
        <h1
          className={`flex flex-col gap-2 text-4xl sm:text-5xl font-bold ${rubik.className}`}
        >
          <span className="lg:translate-y-[100%] lg:animate-[shiftUp_750ms_linear_250ms_forwards]">
            ELEVATE
          </span>
          <span className="lg:translate-y-[100%] lg:animate-[shiftUp_750ms_linear_500ms_forwards]">
            YOUR DIGITAL
          </span>
          <span className="lg:translate-y-[100%] lg:animate-[shiftUp_750ms_linear_750ms_forwards]">
            EXPERIENCE
          </span>
        </h1>
        <p className="text-lg lg:opacity-0 mt-4 lg:animate-[fadeIn_750ms_linear_750ms_forwards] max-w-[30ch]">
          Tailored Web Design Solutions to Enhance Your Brands Unique Voice
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/contact"
            className="text-lg flex items-center bg-[--purple] text-[--white] rounded px-4 py-1 font-bold outline outline-2 outline-[--purple] -outline-offset-2 hover:outline-offset-2 transistion-all duration-100"
          >
            Get Quote
          </Link>
          <a
            href="tel:757-550-0830"
            className="text-lg flex items-center outline outline-2 outline-[--purple] -outline-offset-2 bg-white px-4 py-1 font-bold rounded hover:outline-offset-2 transistion-all duration-100 border-2 border-[--purple]"
          >
            Call now
          </a>
        </div>
      </div>
      <div className="hidden md:block mt-[140px] absolute right-0 -z-10 max-w-[100vw] max-h-[500px] px-4">
        <Image src={illustration} alt="" height="875" width="740" priority />
      </div>
    </section>
  );
};
