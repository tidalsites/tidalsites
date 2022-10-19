import Image from "next/image";
// import characters from "../../../public/characters.png";
// import background from "../../../public/Background.png";
import illustration from "../../../public/splash-illustration.svg";

import styles from "../../../styles/Hero.module.scss";

export const Hero = () => {
  const {
    hero,
    hero__left,
    hero__left__cta,
    hero__right,
    hero__right__characters,
    hero__right__background,
    btn_primary,
  } = styles;
  return (
    <section className={hero}>
      <div className={hero__left}>
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
        <div className={hero__left__cta}>
          <button>
            <span className="material-icons" role="img">
              email
            </span>
            Get Quote
          </button>
          <a href="tel:757-550-0830" className={btn_primary}>
            <span className="material-icons" role="img">
              phone
            </span>
            Call now
          </a>
        </div>
      </div>
      <div className={hero__right}>
        {/* <Image src={characters} alt="" className={hero__right__characters} />
        <Image
          src={background}
          alt=""
          className={hero__right__background}
          layout="fill"
        /> */}
        <Image src={illustration} alt="" height="875" width="740" />
      </div>
    </section>
  );
};
