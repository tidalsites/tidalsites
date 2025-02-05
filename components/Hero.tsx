"use client";

import { Rubik } from "next/font/google";
import { CTA } from "./cta";
import WebsiteAuditForm from "./WebsiteAudit";
import Image from "next/image";
import hero from "../public/assets/images/hero-img.png";
import bolt from "../public/assets/images/bolt.svg";
import { FaChevronRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const rubik = Rubik({ subsets: ["latin"] });

export const Hero = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    document.body.classList.add("no-scroll");
    setIsDialogOpen(true);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    document.body.classList.remove("no-scroll");
    setIsDialogOpen(false);
    dialogRef.current?.close();
  };
  return (
    <section className="flex mb-20 min-h-screen w-full max-w-page mx-auto isolate bg-fixed">
      <div className="absolute right-0 -bottom-1/4 -z-10 | lg:opacity-100 lg:blur-none">
        <Image src={hero} alt="Hero Image" priority />
      </div>
      <div className="pt-[--navbar-height] py-10 px-4 flex-col gap-4 | sm:px-12 | lg:bg-transparent">
        <h1
          className={`flex flex-col text-6xl font-bold max-w-[12ch] [-webkit-text-stroke:1px_var(--theme)] text-black/60 pt-12 | sm:text-7xl | md:text-8xl | lg:[-webkit-text-stroke:2px_var(--theme)] lg:text-9xl ${rubik.className} `}
        >
          <span className="lg:animate-[shiftUp_750ms_ease-in_forwards] lg:translate-y-full">
            BLAZINGLY
          </span>{" "}
          <span className="lg:animate-[shiftUp_750ms_ease-in_250ms_forwards] lg:translate-y-full flex">
            FAST
            <FaChevronRight className=" text-[var(--theme)] -translate-x-[100vw] animate-[shiftRight_750ms_ease-in-out_550ms_forwards] ml-10 | md:inline-flex md:ml-20" />
            <FaChevronRight className=" text-[var(--theme)] -translate-x-[100vw] animate-[shiftRight_750ms_ease-in-out_750ms_forwards] -ml-8 | md:inline-flex md:-ml-10 | lg:-ml-20" />
            <FaChevronRight className=" text-[var(--theme)] -translate-x-[100vw] animate-[shiftRight_750ms_ease-in-out_1000ms_forwards] -ml-8 | md:inline-flex md:-ml-10 | lg:-ml-20" />
          </span>{" "}
          <span className="lg:animate-[shiftUp_750ms_ease-in_350ms_forwards] lg:translate-y-full">
            WEBSITES.
          </span>
        </h1>
        <p className="flex flex-col text-lg max-w-[60ch] text-left backdrop-blur-sm rounded-2xl | lg:opacity-0 mt-8 lg:animate-[fadeIn_750ms_linear_750ms_forwards]">
          <span className="text-xl">
            Don&apos;t let your website be the bottleneck. Improve your
            site&apos;s performance and user experience with our expert web
            services.
          </span>{" "}
        </p>
        <div className="absolute top-0 -left-1/2 -z-10 blur-md opacity-75 | md:-left-1/4 | lg:-left-16">
          <Image src={bolt} alt="lightning bolt" />
        </div>

        <div className="flex flex-wrap gap-4 mt-8 | md:rounded-full md:flex-row | lg:opacity-0 lg:animate-[fadeIn_750ms_linear_1000ms_forwards]">
          <CTA
            onClick={openDialog}
            text="Free Website Audit"
            size="lg"
            type="button"
          />
          <CTA
            href="/contact"
            text="Contact Us"
            size="lg"
            Icon={GoArrowUpRight}
          />
        </div>
      </div>
      <dialog ref={dialogRef} open={isDialogOpen}>
        <div className="fixed inset-0 grid place-content-center bg-black bg-opacity-50 overflow-hidden">
          <button
            className="bg-gray-800 hover:bg-[--theme] outline outline-1 outline-black rounded-full py-1 px-4 w-fit flex items-center gap-4 mb-2 ml-auto"
            onClick={closeDialog}
          >
            Close
            <RiCloseFill />
          </button>
          <WebsiteAuditForm />
        </div>
      </dialog>
    </section>
  );
};
