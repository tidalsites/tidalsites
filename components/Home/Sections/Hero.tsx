import Image from "next/image";
import illustration from "../../../public/splash-illustration.svg";

import styles from "../../../styles/Hero.module.scss";

export const Hero = ({ setShowContactModal }) => {
  const { hero, hero__left, hero__left__cta, hero__right, btn_primary } =
    styles;

  function handleShowContactModal() {
    document.body.classList.add("no-scroll");
    setShowContactModal(true);
  }

  const emailBody =
    "First Name: %0aLast Name: %0aPhone Number: %0aEmail: %0a%0aPlease describe what service or services Tidal Sites can help you with: %0a";

  return (
    <section className={hero}>
      <div className={hero__left}>
        <h1>
          <span>ELEVATE</span>
          <span>YOUR DIGITAL</span>
          <span>EXPERIENCE</span>
        </h1>
        <p>
          Tailored Web Design Solutions to Enhance Your Brand's Unique Voice
        </p>
        <div className={hero__left__cta}>
          {/* <button onClick={handleShowContactModal}>
            <span className="material-icons" role="img">
              email
            </span>
            Get Quote
          </button> */}
          <a
            href={`mailto:devin@tidalsites.com?subject=Service Inquiry&body=${emailBody}`}
            target="_blank"
          >
            <span className="material-icons" role="img">
              email
            </span>
            Get Quote
          </a>
          <a href="tel:757-550-0830" className={btn_primary}>
            <span className="material-icons" role="img">
              phone
            </span>
            Call now
          </a>
        </div>
      </div>
      <div className={hero__right}>
        <Image src={illustration} alt="" height="875" width="740" />
      </div>
    </section>
  );
};
