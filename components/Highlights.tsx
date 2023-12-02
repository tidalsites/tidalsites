import { FC } from "react";
import { LuCheckCircle } from "react-icons/lu";

export const Highlights: FC = () => {
  return (
    <section className="border-t-2 border-t-[--white] flex flex-col items-center px-4 py-8 bg-[url('/assets/images/header-bg.png')] bg-no-repeat bg-cover bg-center text-[--white]">
      <div className="mx-auto max-w-page">
        <h2 className="text-4xl text-center">The Tidal Sites Guarantee</h2>
        <p className="my-4 mx-auto max-w-[70ch] text-center">
          At Tidal Sites, we take pride in our unwavering commitment to
          delivering websites that not only meet but exceed industry standards.
          When you choose us, you are guaranteed:
        </p>
        <div className="flex flex-wrap w-full my-10 gap-8">
          <div className="px-4 py-2 rounded-full border-2 border-[--white] flex items-center gap-2">
            <LuCheckCircle className="text-[--white] text-2xl" />
            <span>SEO</span>
          </div>
          <div className="px-4 py-2 rounded-full border-2 border-[--white] flex items-center gap-2">
            <LuCheckCircle className="text-[--white] text-2xl" />
            <span>Mobile Responsiveness</span>
          </div>
          <div className="px-4 py-2 rounded-full border-2 border-[--white] flex items-center gap-2">
            <LuCheckCircle className="text-[--white] text-2xl" />
            <span>Accessibility</span>
          </div>
          <div className="px-4 py-2 rounded-full border-2 border-[--white] flex items-center gap-2">
            <LuCheckCircle className="text-[--white] text-2xl" />
            <span>Performance Optimizations</span>
          </div>
        </div>
      </div>
    </section>
  );
};
