import Link from "next/link";
import collageImg from "@/public/assets/images/collage.png";
import Image from "next/image";
import hex from "@/public/assets/images/digital-hexagons.svg";

export const Portfolio = () => {
  return (
    <section className="px-4 my-20 relative">
      <div className="absolute -top-6 left-0 max-w-2xl hidden md:block opacity-10 -rotate-6">
        <Image src={hex} alt="Digital Hexagons" />
      </div>
      <div className="mx-auto max-w-page">
        <div className="flex justify-center lg:justify-between mt-10">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-4xl my-4 border-b-[--theme] uppercase border-b-2 border-[--theme]">
              Explore our success stories!
            </h2>
            <p className="max-w-[50ch] text-2xl flex flex-col relative isolate">
              Visit our Portfolio page to delve into a diverse collection of our
              accomplished projects.
            </p>
            <div className="rounded-lg p-4 flex flex-wrap justify-between bg-[rgba(0,0,0,.25)] backdrop-filter backdrop-blur-[10px] shadow-[0_0_16px_-8px_rgba(255,255,255,.25)]">
              <span className="text-lg uppercase text-center">
                See what makes us different
              </span>
              <Link
                className="bg-[--theme] text-[--white] px-4 py-1 rounded-full w-fit outline outline-2 -outline-offset-2 outline-[--theme] hover:outline-offset-2 focus:outline-offset-2 transition-all z-10"
                href="/portfolio"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="hidden lg:block bg-transparent shadow-[0_0_20px_0_rgba(255,255,255,.125)] rounded-lg overflow-hidden">
            <Image src={collageImg} alt="collage" />
          </div>
        </div>
      </div>
    </section>
  );
};
