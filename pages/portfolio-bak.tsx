import { FC } from "react";
import styles from "../styles/Portfolio.module.scss";
import { PortfolioPiece } from "../components/Portfolio/PortfolioPiece";

// Logos
import GladiatorLogo from "../public/gladiator-logo.png";
import DictumSquareLogo from "../public/dictum-square-logo.png";
import AtoBLogo from "../public/atob.svg";
import TidalSitesLogo from "../public/logo.svg";
import XPRTHomeLogo from "../public/xprt-logo.png";
import FourSquareCalcLogo from "../public/foursquare.svg";
import SunriseLogo from "../public/sunrise.svg";
import PlanetLogo from "../public/planet.svg";
import ConcrecalLogo from "../public/concrecal-logo.svg";

import { LogoCard } from "../components/Logo/LogoCard";
import Head from "next/head";

const Portfolio: FC = () => {
  const {
    portfolio,
    content,
    websites,
    sites,
    logos,
    logo__items,
    section__header,
    section__header__bg,
  } = styles;

  return (
    <>
      <Head>
        <title>Tidal Sites Portfolio</title>
        <meta
          name="description"
          content="Discover our success stories at Tidal Sites' Portfolio. Explore a diverse collection of accomplished projects showcasing our web design, development, and branding expertise. Witness how we've empowered businesses to thrive online."
        />
      </Head>
      <div className={portfolio}>
        <div className={content}>
          <div className={websites}>
            <div className={section__header}>
              <span>WEBSITES</span>
              <div className={section__header__bg}></div>
            </div>
            <div className={sites}>
              <PortfolioPiece
                project_name="Concrecal"
                project_img="concrecal-web"
                project_img_alt="Concrecal Proyectos"
                project_type="Website Creation"
              />
              <PortfolioPiece
                project_name="XPRT Home"
                project_img="xprt-web"
                project_img_alt="XPRT Home Website"
                project_type="Website Creation"
              />
              <PortfolioPiece
                project_name="AtoB Towing"
                project_img="atob-web"
                project_img_alt="AtoB Towing Website"
                project_type="Website Re-design"
              />
              <PortfolioPiece
                project_name="PROSOFT"
                project_img="prosoft-web"
                project_img_alt="PROSOFT Engineering Website"
                project_type="Website Re-design"
              />
              <PortfolioPiece
                project_name="Harts Holler Graphics"
                project_img="hhg-web"
                project_img_alt="Harts Holler Graphics Website"
                project_type="Website Creation"
              />
              <PortfolioPiece
                project_name="D.W. Builders"
                project_img="dwbuilders-web"
                project_img_alt="D.W. Builders Website"
                project_type="Website Creation"
              />
            </div>
          </div>
          <div className={logos}>
            <div className={section__header}>
              <span>LOGOS</span>
              <div className={section__header__bg}></div>
            </div>
            <div className={logo__items}>
              <LogoCard
                title="Concrecal Proyectos"
                alt="Concrecal Proyectos"
                src={ConcrecalLogo}
                color="rgb(255, 102, 0)"
              />
              <LogoCard
                title="Sunrise Kitchen & Bath"
                alt="Sunrise Kitchen & Bath"
                src={SunriseLogo}
                color="rgb(255, 102, 0)"
              />
              <LogoCard
                title="Planetary Association"
                alt="Planetary Association"
                src={PlanetLogo}
                color="black"
              />
              <LogoCard
                title="FourSquare ROI"
                alt="FourSquare ROI"
                src={FourSquareCalcLogo}
                color="rgb(51, 204, 56)"
              />
              <LogoCard
                title="Gladiator Home Services"
                alt="Gladiator Home Services"
                src={GladiatorLogo}
                color="rgb(188, 125, 71)"
              />
              <LogoCard
                title="Dictum Labs"
                alt="Dictum Labs"
                src={DictumSquareLogo}
                color="rgb(210, 28, 134)"
              />
              <LogoCard
                title="AtoB Towing"
                alt="AtoB Towing"
                src={AtoBLogo}
                color="rgb(255, 0, 0)"
              />
              <LogoCard
                title="Tidal Sites"
                alt="Tidal Sites"
                src={TidalSitesLogo}
                color="#333"
              />
              <LogoCard
                title="XPRT Home"
                alt="XPRT Home"
                src={XPRTHomeLogo}
                color="rgb(180, 160, 43)"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
