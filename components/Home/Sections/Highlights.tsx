import { FC } from "react";
import checkbox from "../../../public/checkbox.svg";
import Image from "next/image";
import styles from "../../../styles/HighlightsSection.module.scss";

export const Highlights: FC = () => {
  const { highlights, wrapper, highlight } = styles;
  return (
    <div className={highlights}>
      <span>Tidal Sites builds professional websites that always include:</span>
      <div className={wrapper}>
        <div className={highlight}>
          <Image src={checkbox} width="25" height="25" alt="Checkbox" />
          <span>SEO</span>
        </div>
        <div className={highlight}>
          <Image src={checkbox} width="25" height="25" alt="Checkbox" />
          <span>Mobile Responsiveness</span>
        </div>
        <div className={highlight}>
          <Image src={checkbox} width="25" height="25" alt="Checkbox" />
          <span>508 (Accessibility)</span>
        </div>
        <div className={highlight}>
          <Image src={checkbox} width="25" height="25" alt="Checkbox" />
          <span>Performance Optimizations</span>
        </div>
      </div>
    </div>
  );
};
