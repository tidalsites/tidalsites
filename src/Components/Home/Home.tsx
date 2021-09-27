import { FC, useState, useEffect } from "react";
import "./Home.scss";
import characters from "../../Assets/characters.png";
import background from "../../Assets/Background.png";
import webdevIcon from "../../Assets/icon-webdev1.png";
import webDesignImg from "../../Assets/web-design-img.jpg";
import WebDevImg from "../../Assets/web-dev-img.jpg";
import WebDeployImg from "../../Assets/web-deploy-img.jpg";

export const Home: FC = () => {
  const [contactDropdownActive, setContactDropdownActive] =
    useState<boolean>(false);
  return (
    <div
      className="Home"
      onClick={(e) => {
        console.log(e.target.toString());
        if (
          e.target.toString() !== "mailto:tidalsites@gmail.com?subject=Inquiry"
        ) {
          e.preventDefault();
          contactDropdownActive && setContactDropdownActive(false);
        }
      }}
    >
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
          <div className="Home__hero__left__cta">
            <button
              onClick={() => setContactDropdownActive(!contactDropdownActive)}
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
                <span>(757) 550-0830</span>
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
            {/* <button className="btn-secondary">Learn More</button> */}
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

      {/* SERVICES */}
      <section className="Home__services Home__section" id="Services">
        <div className="Home__services__header Home__section__header">
          <span>SERVICES</span>
          <button>
            View all services
            <span className="material-icons" role="img">
              east
            </span>
          </button>
        </div>
        <div className="Home__services__list">
          <ul>
            <li>
              {/* <img src={webdevIcon} alt="" /> */}
              <span className="material-icons" role="img">
                fingerprint
              </span>
              <span className="service-name">Branding</span>
              <p>
                Branding is Identity. Your audience needs to know who you are
                and what you stand for. Branding achieves this through logos,
                iconography, colors, and more.
              </p>
            </li>
            <li>
              {/* <img src={webdevIcon} alt="" /> */}
              <span className="material-icons" role="img">
                web
              </span>
              <span className="service-name">Web Design</span>
              <p>
                The design process for a website brings out the creative
                expression of your business. Simple or complex, Modern or
                Vintage, this process identifies the way you wish to communicate
                with your audience
              </p>
            </li>
            <li>
              {/* <img src={webdevIcon} alt="" /> */}
              <span className="material-icons" role="img">
                code
              </span>
              <span className="service-name">Web Development</span>
              {/* <img
                src={webdevIcon}
                alt="Developer sitting with laptop in front of cloud with binary background"
              /> */}
              <p>
                The build. This is where we start to see the website come alive.
                At the end of this, your product will be ready to go live!
              </p>
            </li>
            <li>
              {/* <img src={webdevIcon} alt="" /> */}
              <span className="material-icons" role="img">
                cloud
              </span>
              <span className="service-name">Hosting</span>
              <p>
                After a website is created, it must live somewhere. Hosting is
                just finding the right home.
              </p>
            </li>
            <li>
              {/* <img src={webdevIcon} alt="" /> */}
              <span className="material-icons" role="img">
                build
              </span>
              <span className="service-name">Maintenance</span>
              <p>
                Once a website is live, it requires upkeep. Maintenance is the
                process of making sure your audience is always capable of using
                your website as intended.
              </p>
            </li>
            <li>
              {/* <img src={webdevIcon} alt="" /> */}
              <span className="material-icons" role="img">
                contact_support
              </span>
              <span className="service-name">Consulting</span>
              <p>
                Looking for some quick advice? Have any unsolved mysteries of
                web technologies? Let Tidal Sites crack the code.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="Home__process Home__section" id="Process">
        <div className="Home__process__header Home__section__header">
          <span>LOVE THE PROCESS</span>
          <button>Learn more</button>
        </div>
        <div className="Home__process__content">
          <div className="Home__process__content__col">
            <span>Design</span>
            <p>
              All websites from Tidal Sites are custom designed. No templates!
              Each customer is unique and we value and encourage anyone with a
              website to create their own unique experience on the web. Our web
              design process ensures that you are happy with the look and feel
              of your website before we even start to build anything.
            </p>
            <img src={webDesignImg} alt="" />
          </div>
          <div className="Home__process__content__col">
            <span>Develop</span>
            <p>
              After a website is designed, it is time to build it. Tidal Sites
              not only custom designs every website, but every one is also built
              by hand. Again, no templates!
            </p>
            <img src={WebDevImg} alt="" />
          </div>
          <div className="Home__process__content__col">
            <span>Deploy</span>
            <p>
              The site is designed. The site is built. Now it is time to deploy.
              This is when your website goes public. Whether you choose your own
              hosting platform or choose to leverage Tidal Sites, we ensure a
              smooth process in making your website go live!
            </p>
            <img src={WebDeployImg} alt="" />
          </div>
        </div>
      </section>
      {/* <section className="Home__section Home__portfolio"></section> */}
    </div>
  );
};
