import { FC } from "react";

export const Portfolio: FC = () => {
  return (
    <section className="Home__portfolio Home__section">
      <div className="Home__portfolio__header Home__section__header">
        <span>DARE TO BE DIFFERENT</span>
      </div>
      <div className="Home__portfolio__content">
        <div className="Home__portfolio__content__item Home__portfolio__content__left">
          <span></span>
        </div>
        <div className="Home__portfolio__content__item Home__portfolio__content__text">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            libero ratione cupiditate placeat tempore nam sunt in, culpa impedit
            tenetur numquam doloribus autem reprehenderit ducimus voluptate at
            unde! Necessitatibus voluptas vitae vel unde impedit aspernatur
            iusto totam cupiditate sapiente! Ullam distinctio molestias minima
            ea doloribus sequi ex, animi eaque perferendis odio voluptatibus
            expedita suscipit laboriosam?
          </span>
        </div>
        <div className="Home__portfolio__content__item Home__portfolio__content__right"></div>
        <div className="Home__portfolio__content__cta">
          <button>View Portfolio</button>
        </div>
      </div>
    </section>
  );
};
