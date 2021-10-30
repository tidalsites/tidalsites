import { FC } from "react";
import checkbox from "../../../Assets/checkbox.svg";

export const Highlights: FC = () => {
  return (
    <div className="Home__Highlights">
      <span>Tidal Sites builds professional websites that always include:</span>
      <div className="Home__Highlights__wrapper">
        <div className="Home__Highlights__Highlight">
          <img src={checkbox} alt="Checkbox" />
          <span>SEO</span>
        </div>
        <div className="Home__Highlights__Highlight">
          <img src={checkbox} alt="Checkbox" />
          <span>Mobile Responsiveness</span>
        </div>
        <div className="Home__Highlights__Highlight">
          <img src={checkbox} alt="Checkbox" />
          <span>508 (Accessibility)</span>
        </div>
        <div className="Home__Highlights__Highlight">
          <img src={checkbox} alt="Checkbox" />
          <span>Performance Optimizations</span>
        </div>
      </div>
    </div>
  );
};
