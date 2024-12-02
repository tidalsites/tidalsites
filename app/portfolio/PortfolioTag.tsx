import { LuCheckCircle } from "react-icons/lu";

type Props = {
  tag: string;
};

export const PortfolioTag = ({ tag }: Props) => {
  return (
    <div className="px-4 py-px rounded-full flex items-center gap-2 h-fit shadow-[0_0_10px_-6px_rgba(255,255,255,.25)] backdrop-filter backdrop-blur-[10px] bg-[rgba(0,0,0,.25)]">
      <LuCheckCircle className="text-white" />
      <span className="text-white text-sm">{tag}</span>
    </div>
  );
};
