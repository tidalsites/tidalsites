import { FC } from "react";
import "./Banner.scss";

interface IBannerProps {
  text: string;
}

export const Banner: FC<IBannerProps> = ({ text }) => {
  return (
    <div className="Banner">
      <span>{text}</span>
    </div>
  );
};
