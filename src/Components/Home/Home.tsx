import { FC, useState } from "react";
import "./Home.scss";

// Components
import { Services } from "./Sections/Services";
import { Process } from "./Sections/Process";
import { Hero } from "./Sections/Hero";

export const Home: FC = () => {
  const [contactDropdownActive, setContactDropdownActive] =
    useState<boolean>(false);
  return (
    <div
      className="Home"
      onClick={(e) => {
        if (
          e.target.toString() !==
            "mailto:tidalsites@gmail.com?subject=Inquiry" &&
          e.target.toString() !== "tel:757-550-0830"
        ) {
          e.preventDefault();
          contactDropdownActive && setContactDropdownActive(false);
        }
      }}
    >
      {/* <section className="Home__hero Home__section">
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
          <div className="Home__hero__left__cta">
            <button
              onClick={() => setContactDropdownActive(true)}
              className={contactDropdownActive ? "active" : ""}
            >
              {contactDropdownActive ? "Ask for Devin!" : "Contact Us"}
            </button>
            <div
              className={`Home__hero__left__cta__dropdown ${
                contactDropdownActive ? "active" : ""
              }`}
            >
              <div className="Home__hero__left__cta__dropdown__contact">
                <span className="material-icons" role="img">
                  phone
                </span>
                <a href="tel:757-550-0830">(757) 550-0830</a>
              </div>
              <div className="Home__hero__left__cta__dropdown__contact">
                <span className="material-icons" role="img">
                  email
                </span>
                <a href="mailto:tidalsites@gmail.com?subject=Inquiry">
                  tidalsites@gmail.com
                </a>
              </div>
            </div>
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
      </section> */}
      <Hero
        contactDropdownActive={contactDropdownActive}
        setContactDropdownActive={setContactDropdownActive}
      />
      <Services />
      <Process />
    </div>
  );
};
