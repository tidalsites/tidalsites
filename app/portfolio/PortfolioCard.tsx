import Image, { StaticImageData } from "next/image";
import { PortfolioTag } from "./PortfolioTag";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

type Props = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
  description: string;
  tags: string[];
  position: "left" | "right";
  link?: string;
};

export const PortfolioCard = ({
  title,
  imgSrc,
  alt,
  description,
  tags,
  position,
  link,
}: Props) => {
  return (
    <div className="grid grid-rows-[250px,auto,auto,auto] row-span-4 sm:border-2 border-black sm:rounded-xl sm:shadow-lg overflow-hidden max-w-prose h-full">
      <Image
        src={imgSrc}
        alt={alt}
        className="h-full object-cover object-top row-span-1 border-b-2 border-b-black"
      />

      <div
        className={`p-4 grid grid-rows-subgrid row-span-3 ${
          position === "left" ? "bg-zinc-100" : "bg-white"
        } sm:bg-white`}
      >
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="text-xl my-4 py-2 rounded-lg flex items-center gap-2 w-fit transition-all hover:px-4 hover:bg-zinc-200 "
          >
            <span>{title}</span>
            <LuExternalLink className="text-2xl" />
          </Link>
        ) : (
          <div className="text-xl py-4 flex gap-2">
            <span>{title}</span>
          </div>
        )}

        <p className="max-w-scale text-sm leading-6 text-[--black]">
          {description}
        </p>
        <div className="flex flex-wrap items-end gap-2 mt-4">
          {tags.map((tag, i) => {
            return <PortfolioTag tag={tag} key={`PortfolioTag_${tag}_${i}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

{
  /* <div>
      <div className="text-xl py-4 my-4">{title}</div>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <Image
          src={imgSrc}
          alt={alt}
          className="border-2 border-[--black] rounded-lg shadow-lg"
          width="768"
        />
        <p className="max-w-scale">{description}</p>
      </div>
      <div className="flex flex-wrap gap-4 py-2 justify-start">
        {tags.map((tag, i) => {
          return <PortfolioTag tag={tag} key={`PortfolioTag_${tag}_${i}`} />;
        })}
      </div>
    </div> */
}

{
  /* <div>
              <div className="text-xl py-4 my-4">XPRT Home</div>
              <div className="flex flex-wrap flex-row-reverse gap-8 justify-center items-center">
                <Image
                  src={XPRTHomeWeb}
                  alt="XPRT Home"
                  className="border-2 border-[--black] rounded-lg shadow-lg"
                  width="768"
                  height="455"
                />
                <p className="max-w-prose">
                  XPRT Home, specializing in home renovation and building
                  services, recognized the importance of a strong online
                  presence. Tidal Sites stepped in to create a compelling
                  website that not only attracts additional clients but also
                  establishes a solid foundation for this new company. Our
                  services extended to crafting a brand new logo, ensuring XPRT
                  Home is impeccably represented.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-2 md:justify-center xl:justify-end">
                <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--purple] text-2xl" />
                  <span>Web Design</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--purple] text-2xl" />
                  <span>Hosting</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--purple] text-2xl" />
                  <span>Branding - Logo</span>
                </div>
                <div className="px-4 py-2 rounded-lg border-2 border-[--purple] flex items-center gap-2 bg-white text-[--black]">
                  <LuCheckCircle className="text-[--purple] text-2xl" />
                  <span>Graphic Design</span>
                </div>
              </div>
            </div> */
}
