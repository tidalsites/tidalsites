import Link from "next/link";
import collageImg from "@/public/assets/images/collage.png";
import Image from "next/image";
import hex from "@/public/assets/images/digital-hexagons.svg";
import { SwiperComponent } from "./Swiper";

import atob from "@/public/assets/images/atob-web-min.png";
import prosoft from "@/public/assets/images/prosoft-web-min.png";
import concrecal from "@/public/assets/images/concrecal-web-min.png";
import olokun from "@/public/assets/images/olokun-web.webp";
import { CTA } from "./cta";

export const Portfolio = () => {
  const slides = [
    { src: atob, alt: "ATOB", width: 768, height: 388 },
    { src: prosoft, alt: "Prosoft", width: 768, height: 388 },
    { src: concrecal, alt: "Concrecal", width: 768, height: 454 },
    { src: olokun, alt: "Olokun", width: 1856, height: 858 },
  ];

  return (
    <section className="px-4 my-20 relative">
      <div className="absolute -top-6 left-0 max-w-2xl hidden md:block opacity-10 -rotate-6">
        <Image src={hex} alt="Digital Hexagons" />
      </div>
      <div className="mx-auto max-w-page">
        <div className="mt-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl border-b-[--theme] uppercase border-b-2 border-[--theme]">
              Explore our success stories!
            </h2>
            <div className="p-4 -mx-8">
              <div className=" bg-[radial-gradient(rgba(0,0,0,.5)_40%,transparent_100%)] px-4 py-2 lg:pt-4 lg:rounded-2xl backdrop-blur-sm shadow-[0_0_20px_-6px_rgba(255,255,255,.25)]">
                <SwiperComponent slides={slides} />
              </div>
            </div>

            {/* <Link
              className="transition-all  mt-10 w-fit mx-auto rounded-full px-4 hover:px-6 py-2 outline outline-1 outline-[rgba(0,200,255,.25)] bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-[5px] shadow-[0_0_20px_-10px_rgba(255,255,255,.125)] hover:text-shadow-[0_0_5px_#00c8ff] hover:bg-[rgba(0,200,255,.25)] hover:shadow-[0_0_20px_0px_rgba(0,200,255,.25)]"
              href="/portfolio"
            >
              View Full Portfolio
            </Link> */}
            <div className="mt-10 flex justify-center py-10">
              <CTA href="/portfolio" text="View Full Portfolio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
