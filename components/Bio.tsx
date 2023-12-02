import Image from "next/image";

import bioImg from "@/public/assets/images/bio-pic.png";
import { TBio } from "@/types/types";

type Props = TBio;

export const Bio = ({ name, title, bio }: Props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-4 max-w-[43em]">
      <Image
        src={bioImg}
        alt={name}
        className="max-w-[200px] max-h-[200px] outline-double outline-[8px] outline-[--white] -outline-offset-4 rounded-full"
      />
      <div className="max-w-prose flex flex-col grow">
        <span className="text-lg">{name}</span>
        <span className="text-sm mb-4">{title}</span>
        {bio.map((el, i) => (
          <p key={`bio_${name}_${i}`} className="py-2 text-white/80">
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};
