import Image, { StaticImageData } from "next/image";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { Chip } from "@/components/Chip";

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
    <div className="grid grid-rows-[auto_auto_auto_auto] lg:grid-rows-[300px_auto_auto_auto] xl:grid-rows-[250px_auto_auto_auto] row-span-4 justify-center sm:rounded-3xl overflow-hidden h-full bg-[rgba(0,0,0,.5)] shadow-[0_0_12px_-6px_rgba(255,255,255,.25)] p-4">
      <div className="rounded-2xl overflow-hidden border-2 border-gray-400">
        <Image
          src={imgSrc}
          alt={alt}
          className="h-full object-cover object-top row-span-1"
        />
      </div>

      <div className="p-4 grid grid-rows-subgrid row-span-3">
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="text-2xl mt-4 mb-2 py-1 rounded-full flex items-center gap-2 w-fit transition-all hover:px-4 hover:bg-(--theme) hover:shadow-[0_0_20px_0px_rgba(0,200,255,.25)]"
          >
            <span>{title}</span>
            <LuExternalLink className="text-2xl" />
          </Link>
        ) : (
          <div className="text-2xl mt-4 mb-2 py-1 flex gap-2">
            <span>{title}</span>
          </div>
        )}

        <p className="max-w-scale leading-6">{description}</p>
        <div className="flex flex-wrap items-end gap-2 mt-10">
          {tags.map((tag, i) => {
            return <Chip key={i} text={tag} size="sm" border={false} />;
          })}
        </div>
      </div>
    </div>
  );
};
