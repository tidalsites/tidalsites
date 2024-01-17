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
