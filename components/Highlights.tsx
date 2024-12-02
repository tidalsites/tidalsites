import { FC } from "react";
import { LuCheckCircle } from "react-icons/lu";

export const Highlights: FC = () => {
  return (
    <section className="flex flex-col items-center px-4 py-8">
      <div className="mx-auto max-w-page">
        <h2 className="text-4xl text-center">The Tidal Sites Guarantee</h2>
        <p className="my-4 mx-auto max-w-[70ch] text-center">
          At Tidal Sites, we take pride in our unwavering commitment to
          delivering websites that not only meet but exceed industry standards.
          When you choose us, you are guaranteed:
        </p>
        <div className="flex flex-col w-full my-10 gap-8 max-w-[clamp(400px,30vw,600px)] mx-auto lg:flex-row lg:mx-0 lg:max-w-none">
          <div className="w-fit px-4 py-2 rounded-full bg-[rgba(0,0,0,.5)] shadow-[0_0_12px_-6px_rgba(255,255,255,.25)] outline outline-[1px] outline-[rgba(0,200,255,.5)] flex items-center gap-2">
            <LuCheckCircle className=" text-2xl" />
            <span>SEO</span>
          </div>
          <div className="w-fit ml-auto px-4 py-2 rounded-full bg-[rgba(0,0,0,.5)] shadow-[0_0_12px_-6px_rgba(255,255,255,.25)] outline outline-[1px] outline-[rgba(0,200,255,.5)] flex items-center gap-2">
            <LuCheckCircle className=" text-2xl" />
            <span>Mobile Responsiveness</span>
          </div>
          <div className="w-fit px-4 py-2 rounded-full bg-[rgba(0,0,0,.5)] shadow-[0_0_12px_-6px_rgba(255,255,255,.25)] outline outline-[1px] outline-[rgba(0,200,255,.5)] flex items-center gap-2">
            <LuCheckCircle className=" text-2xl" />
            <span>Accessibility</span>
          </div>
          <div className="w-fit ml-auto px-4 py-2 rounded-full bg-[rgba(0,0,0,.5)] shadow-[0_0_12px_-6px_rgba(255,255,255,.25)] outline outline-[1px] outline-[rgba(0,200,255,.5)] flex items-center gap-2">
            <LuCheckCircle className=" text-2xl" />
            <span>Performance Optimizations</span>
          </div>
        </div>
      </div>
    </section>
  );
};
