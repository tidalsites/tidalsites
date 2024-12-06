import { FC } from "react";
import { LuCheckCircle } from "react-icons/lu";
import { Chip } from "./Chip";

export const Highlights: FC = () => {
  return (
    <section className="flex flex-col items-center px-4 py-8">
      <div className="mx-auto max-w-page w-full">
        <h2 className="text-4xl text-center">The Tidal Sites Guarantee</h2>
        <p className="my-4 mx-auto max-w-[70ch] text-center">
          At Tidal Sites, we take pride in our unwavering commitment to
          delivering websites that not only meet but exceed industry standards.
          When you choose us, you are guaranteed:
        </p>
        <div className="flex flex-wrap sm:justify-center my-10 gap-8 max-w-page mx-auto lg:mx-0 lg:max-w-none">
          <Chip text="SEO" />
          <Chip text="Performance" />
          <Chip text="Responsive Design" />
          <Chip text="Security" />
          <Chip text="Accessibility" />
        </div>
      </div>
    </section>
  );
};
