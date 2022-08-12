import { FC, SetStateAction, Dispatch } from "react";
import characters from "../../../Assets/characters.png";
import background from "../../../Assets/Background.png";

interface IHeroProps {
  setShowContactModal: Dispatch<SetStateAction<boolean>>;
}

export const Hero: FC<IHeroProps> = ({ setShowContactModal }) => {
  return (
    <section className="Home__hero Home__section">
      <div className="Home__hero__left">
        <h1>
          <span>ENHANCE</span>
          <span>YOUR WEB</span>
          <span>EXPERIENCE</span>
        </h1>
        <p>
          Grow your business with a professional web presence. Tidal Sites
          offers a comprehensive design process that ensures that your website
          is both functional and beautiful.
        </p>
        <div className="Home__hero__left__cta cta">
          <button onClick={() => setShowContactModal(true)}>
            <span className="material-icons" role="img">
              email
            </span>
            Get Quote
          </button>
          <a href="tel:757-550-0830" className="btn-primary">
            <span className="material-icons" role="img">
              phone
            </span>
            Call now
          </a>
        </div>
      </div>
      <div className="Home__hero__right">
        <img
          src={characters}
          alt=""
          className="Home__hero__right__characters"
        />
        <img
          src={background}
          alt=""
          className="Home__hero__right__background"
        />
      </div>
    </section>
  );
};
