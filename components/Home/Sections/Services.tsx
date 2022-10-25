import { FC } from "react";
import Link from "next/link";
import { ParentLink } from "../../ParentLink";
import styles from "../../../styles/ServiceSection.module.scss";
import home_styles from "../../../styles/Home.module.scss";

export const Services: FC = () => {
  const { services__header, services__list, service__name, service__icon } =
    styles;
  const { home__section__header } = home_styles;
  return (
    <section className="Home__services Home__section" id="Services">
      <div className={services__header}>
        <span className={home__section__header}>SERVICES</span>
        <Link href="/services">
          <a>
            <span>View all services</span>
            <span className="material-icons" role="img">
              east
            </span>
          </a>
        </Link>
      </div>
      <div className={services__list}>
        <ul>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              fingerprint
            </span>
            <span className={service__name}>Branding</span>
            <p>
              Branding is Identity. Your audience needs to know who you are and
              what you stand for. Branding achieves this through logos,
              iconography, colors, and more.
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              web
            </span>
            <span className={service__name}>Web Design</span>
            <p>
              The design process for a website brings out the creative
              expression of your business. Simple or complex, Modern or Vintage,
              this process identifies the way you wish to communicate with your
              audience
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              code
            </span>
            <span className={service__name}>Web Development</span>
            <p>
              The build. This is where we start to see the website come alive.
              At the end of this, your product will be ready to go live!
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              cloud
            </span>
            <span className={service__name}>Hosting</span>
            <p>
              After a website is created, it must live somewhere. Hosting is
              just finding the right home.
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              build
            </span>
            <span className={service__name}>Maintenance</span>
            <p>
              Once a website is live, it requires upkeep. Maintenance is the
              process of making sure your audience is always capable of using
              your website as intended.
            </p>
          </li>
          <li>
            <span className={`material-icons ${service__icon}`} role="img">
              contact_support
            </span>
            <span className={service__name}>Consulting</span>
            <p>
              Looking for some quick advice? Have any unsolved mysteries of web
              technologies? Let Tidal Sites crack the code.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
