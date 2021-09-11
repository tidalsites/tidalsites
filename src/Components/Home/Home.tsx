import { FC, useState, useEffect } from "react";
import "./Home.scss";
import characters from "../../Assets/characters.png";
import background from "../../Assets/Background.png";

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
      {/* <section className="Home__services Home__section">
        <div className="Home__services__header Home__section__header">
          <span>SERVICES</span>
          <button>
            View all services
            <span className="material-icons">east</span>
          </button>
        </div>
        <div className="Home__services__list">
          <ul>
            <li>
              <span>Branding</span>
            </li>
            <li>
              <span>Web Design</span>
            </li>
            <li>
              <span>Development</span>
            </li>
            <li>
              <span>Hosting</span>
            </li>
            <li>
              <span>Maintenance</span>
            </li>
            <li>
              <span>Consulting</span>
            </li>
          </ul>
        </div>
      </section> */}

      {/* PROCESS */}
      {/* <section className="Home__process Home__section">
        <div className="Home__process__header Home__section__header">
          <span>LOVE THE PROCESS</span>
          <button>Learn more</button>
        </div>
        <div className="Home__process__content">
          <div className="Home__process__content__col">
            <span>Design</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              reprehenderit iste obcaecati sunt ipsam, debitis in cumque
              consequuntur, quisquam animi doloribus odio minus rem et culpa
              recusandae? Nobis architecto dolorem blanditiis ipsam facere
              consequatur aliquam neque placeat saepe, nulla, eaque corporis
              inventore nihil sint ad suscipit fugiat asperiores veniam magni!
              Ea numquam ut commodi optio labore repellendus vero quam maxime.
            </p>
            <img src="#" alt="" />
          </div>
          <div className="Home__process__content__col">
            <span>Develop</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              vero aspernatur distinctio laudantium corrupti atque amet
              quisquam, quam cupiditate, unde hic maiores dignissimos
              accusantium consectetur molestiae sed mollitia officiis aut culpa
              dolorem aliquam animi porro officia vel. Similique aperiam rerum
              ratione obcaecati. Neque quod ab tenetur eveniet eligendi, sequi
              dolores vero? Provident ullam placeat modi laudantium esse sint
              laborum expedita aspernatur fugit temporibus similique, repellat
              saepe dignissimos aperiam quaerat voluptate cumque at a corporis
              quam eveniet. Sapiente itaque consequatur vero doloribus debitis
              quas qui nemo voluptas minima velit accusamus commodi nostrum
              corporis animi asperiores ipsum, molestiae provident nam saepe!
              Atque?
            </p>
            <img src="#" alt="" />
          </div>
          <div className="Home__process__content__col">
            <span>Deploy</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores autem fugit reprehenderit incidunt, deserunt sint
              dolorem iure perspiciatis? Quaerat doloribus ex expedita hic. Non,
              accusamus alias aspernatur officiis unde optio! Veniam ipsam
              expedita perspiciatis possimus.
            </p>
            <img src="#" alt="" />
          </div>
        </div>
      </section> */}
      {/* <section className="Home__section Home__portfolio"></section> */}
    </div>
  );
};
