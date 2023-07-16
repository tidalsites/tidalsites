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
          Tidal Sites is a forward-thinking design company dedicated to
          providing customized UI/UX solutions that enhance the digital
          experiences of its clients. With a team of talented and creative
          designers, Tidal Sites takes a comprehensive approach to web design,
          ensuring that every website they create is both visually stunning and
          highly functional.
        </p>
        <Link href="/portfolio">
          <a className={cta}>View Portfolio</a>
        </Link>
      </div>
    </section>
  );
};
