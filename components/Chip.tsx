import { FC } from "react";
import { LuCheck } from "react-icons/lu";

type Props = {
  size?: "sm" | "md" | "lg";
  border?: boolean;
  shadow?: boolean;
  checkmark?: boolean;
  text: string;
};

export const Chip: FC<Props> = ({
  size = "md",
  border = true,
  shadow = true,
  checkmark = true,
  text,
}) => {
  const borderClasses = border ? "outline outline-[rgba(0,200,255,.5)]" : "";
  const shadowClasses = shadow
    ? "shadow-[0_0_12px_-6px_rgba(255,255,255,.25)]"
    : "";
  const baseClasses =
    "px-4 py-2 rounded-full bg-[rgba(0,0,0,.5)] flex items-center gap-2 w-fit";
  const sizeClasses =
    size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg";

  const checkClasses =
    size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl";
  const wrapperClass = `${baseClasses} ${borderClasses} ${shadowClasses} ${sizeClasses}`;
  return (
    <div className={wrapperClass}>
      {checkmark && <LuCheck className={checkClasses} />}
      <span>{text}</span>
    </div>
  );
};
