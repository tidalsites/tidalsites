import Link from "next/link";
import styles from "../../../styles/PortfolioSection.module.scss";
import home_styles from "../../../styles/Home.module.scss";

export const Portfolio = () => {
  const { section, header, content, cta } = styles;
  const { home__section__header } = home_styles;
  return (
    <section className={section} id="Portfolio">
      <div className={header}>
        <span className={home__section__header}>DARE TO BE DIFFERENT</span>
      </div>
      <div className={content}>
        <p>
          Tidal Sites believes that every website should be different. We make
          every effort to showcase what makes you unique! Take a look at some of
          our latest work.
        </p>
        <Link href="/portfolio">
          <a className={cta}>View Portfolio</a>
        </Link>
      </div>
    </section>
  );
};
