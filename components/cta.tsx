import Link from "next/link";
import { FC } from "react";

type Props = {
  variant?: "primary" | "ghost";
  href?: string;
  text: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "link";
  Icon?: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
};

export const CTA: FC<Props> = ({
  variant = "primary",
  href,
  text,
  size = "md",
  type = "link",
  Icon,
  onClick,
}) => {
  const baseClasses =
    "transition-all w-fit rounded-full outline outline-1 outline-[rgba(0,200,255,.25)] bg-[rgba(0,0,0,.5)] backdrop-filter backdrop-blur-[5px] shadow-[0_0_20px_-10px_rgba(255,255,255,.125)] flex items-center";

  const sizeClasses =
    size === "sm"
      ? "text-sm px-2 py-1 hover:px-4"
      : size === "lg"
      ? "text-lg px-6 py-3 hover:px-8 "
      : "text-base px-4 hover:px-6 py-2";
  const className = `${baseClasses} ${sizeClasses} ${
    variant === "primary"
      ? "hover:text-shadow-[0_0_5px_#00c8ff] hover:bg-[rgba(0,200,255,.25)] hover:shadow-[0_0_20px_0px_rgba(0,200,255,.25)]"
      : ""
  }`;

  if (type === "button") {
    return (
      <button className={className} type="button" onClick={onClick}>
        {text}
      </button>
    );
  }

  return (
    <Link href={href || ""} className={className}>
      {text}
      {Icon && <Icon className="ml-2 text-2xl" />}
    </Link>
  );
};
