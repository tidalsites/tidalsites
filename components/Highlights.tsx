import { FC } from "react";
import { LuCheckCircle } from "react-icons/lu";

export const Highlights: FC = () => {
  return (
    <section className="mt-20 flex flex-col items-center px-4">
      <h2 className="text-4xl text-center">The Tidal Sites Guarantee</h2>
      <p className="my-4 text-black/80 max-w-[70ch] text-center">
        At Tidal Sites, we take pride in our unwavering commitment to delivering
        websites that not only meet but exceed industry standards. When you
        choose us, you are guaranteed:
      </p>
      <div className="flex flex-wrap justify-around w-full my-10 gap-8">
        <div className="px-4 py-2 rounded-full border-2 border-[--purple] flex items-center gap-2">
          <LuCheckCircle className="text-[--purple] text-2xl" />
          <span>SEO</span>
        </div>
        <div className="px-4 py-2 rounded-full border-2 border-[--purple] flex items-center gap-2">
          <LuCheckCircle className="text-[--purple] text-2xl" />
          <span>Mobile Responsiveness</span>
        </div>
        <div className="px-4 py-2 rounded-full border-2 border-[--purple] flex items-center gap-2">
          <LuCheckCircle className="text-[--purple] text-2xl" />
          <span>508 (Accessibility)</span>
        </div>
        <div className="px-4 py-2 rounded-full border-2 border-[--purple] flex items-center gap-2">
          <LuCheckCircle className="text-[--purple] text-2xl" />
          <span>Performance Optimizations</span>
        </div>
      </div>
    </section>
  );
};
