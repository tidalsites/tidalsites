import Link from "next/link";

export const Portfolio = () => {
  return (
    <section className="Home__portfolio Home__section" id="Portfolio">
      <div className="Home__portfolio__header Home__section__header">
        <span>DARE TO BE DIFFERENT</span>
      </div>
      <div className="Home__portfolio__content">
        <p>
          Tidal Sites believes that every website should be different. We make
          every effort to showcase what makes you unique! Take a look at some of
          our latest work.
        </p>
        <Link className="Home__portfolio__content__cta" href="/Portfolio">
          View Portfolio
        </Link>
      </div>
    </section>
  );
};
