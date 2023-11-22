import Link from "next/link";
import collageImg from "@/public/assets/images/collage.png";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-100 to-slate-200">
      <div className="mx-auto max-w-page">
        <h2 className="text-4xl">DARE TO BE DIFFERENT</h2>
        <div className="flex justify-center lg:justify-between mt-10">
          <div className="flex flex-col justify-center gap-4">
            <p className="max-w-[50ch]">
              Explore our success stories and witness the power of exemplary web
              solutions in action. Visit our Portfolio page to delve into a
              diverse collection of our accomplished projects. See how
              we&apos;ve helped businesses like yours achieve their online
              goals. Take a tour of innovation and inspiration today.
            </p>
            <Link
              className="bg-[--purple] text-[--white] px-4 py-2 rounded-full w-fit outline outline-2 -outline-offset-2 outline-[--purple] hover:outline-offset-2 transition-all"
              href="/portfolio"
            >
              View Portfolio
            </Link>
          </div>
          <div className="hidden lg:block">
            <Image width="800" height="729" src={collageImg} alt="collage" />
          </div>
        </div>
      </div>
    </section>
  );
};
