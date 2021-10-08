import { FC } from "react";
import { Link } from "react-router-dom";

export const Portfolio: FC = () => {
  return (
    <section className="Home__portfolio Home__section" id="Portfolio">
      <div className="Home__portfolio__header Home__section__header">
        <span>DARE TO BE DIFFERENT</span>
      </div>
      <div className="Home__portfolio__content">
        <div className="Home__portfolio__content__left">
          <div className="Home__portfolio__content__left__img"></div>
        </div>
        <div className="Home__portfolio__content__right">
          <div className="Home__portfolio__content__right__text">
            <p>
              Tidal Sites believes that every website should be different. Take
              your website to the next level and showcase what makes you unique.
            </p>
          </div>
          <div className="Home__portfolio__content__right__img"></div>
        </div>
        <div className="Home__portfolio__content__cta">
          <Link to="/Portfolio">View Portfolio</Link>
        </div>
      </div>
    </section>
  );
};
