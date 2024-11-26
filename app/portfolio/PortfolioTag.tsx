import { LuCheckCircle } from "react-icons/lu";

type Props = {
  tag: string;
};

export const PortfolioTag = ({ tag }: Props) => {
  return (
    <div className="px-4 py-px rounded-full flex items-center gap-2 bg-[--theme] h-fit">
      <LuCheckCircle className="text-white" />
      <span className="text-white text-sm">{tag}</span>
    </div>
  );
};
