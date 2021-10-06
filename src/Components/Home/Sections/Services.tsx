import { FC } from "react";

export const Services: FC = () => {
  return (
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
            <span className="material-icons" role="img">
              fingerprint
            </span>
            <span className="service-name">Branding</span>
            <p>
              Branding is Identity. Your audience needs to know who you are and
              what you stand for. Branding achieves this through logos,
              iconography, colors, and more.
            </p>
          </li>
          <li>
            <span className="material-icons" role="img">
              web
            </span>
            <span className="service-name">Web Design</span>
            <p>
              The design process for a website brings out the creative
              expression of your business. Simple or complex, Modern or Vintage,
              this process identifies the way you wish to communicate with your
              audience
            </p>
          </li>
          <li>
            <span className="material-icons" role="img">
              code
            </span>
            <span className="service-name">Web Development</span>
            <p>
              The build. This is where we start to see the website come alive.
              At the end of this, your product will be ready to go live!
            </p>
          </li>
          <li>
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
            <span className="material-icons" role="img">
              contact_support
            </span>
            <span className="service-name">Consulting</span>
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
