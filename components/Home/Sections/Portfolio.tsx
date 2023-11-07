import Link from "next/link";
import styles from "../../../styles/PortfolioSection.module.scss";
import home_styles from "../../../styles/Home.module.scss";
import collageImg from "../../../public/collage.png";
import Image from "next/image";

export const Portfolio = () => {
  const { section, header, content, cta, collage, content__section } = styles;
  const { home__section__header } = home_styles;
  return (
    <section className={section} id="Portfolio">
      <div className={header}>
        <span className={home__section__header}>DARE TO BE DIFFERENT</span>
      </div>
      <div className={content}>
        <div className={content__section}>
          <p>
            Explore our success stories and witness the power of exemplary web
            solutions in action. Visit our Portfolio page to delve into a
            diverse collection of our accomplished projects. See how we've
            helped businesses like yours achieve their online goals. Take a tour
            of innovation and inspiration today.
          </p>
          <Link href="/portfolio">
            <a className={cta}>View Portfolio</a>
          </Link>
        </div>
        <div className={content__section}>
          <Image width="800" height="729" src={collageImg} alt="collage" />
        </div>
      </div>
    </section>
  );
};
