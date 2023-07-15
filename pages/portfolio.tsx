import { FC, useState } from "react";
import styles from "../styles/Portfolio.module.scss";
import Image from "next/image";
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

import placeholder from "../public/placeholder-img.png";

// Digital Marketing Images
import brochure from "../public/brochure.svg";
import lockBrochure from "../public/lock-brochure.svg";
import { LogoCard } from "../components/Logo/LogoCard";

const logoSize = "150";

const Portfolio: FC = () => {
  const {
    portfolio,
    content,
    websites,
    sites,
    logos,
    logo__items,
    logo__items__img,
    logo__card,
    logo__title,
    design,
    design__items,
    section__header,
  } = styles;

  const [firstGraphicLoaded, setFirstGraphicLoaded] = useState<boolean>(false);
  const [secondGraphicLoaded, setSecondGraphicLoaded] =
    useState<boolean>(false);
  return (
    <div className={portfolio}>
      <div className={content}>
        <div className={websites}>
          <span className={section__header}>WEBSITES</span>
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
          <span className={section__header}>LOGOS</span>
          <div className={logo__items}>
            {/* <div className={logo__card}>
              <p className={logo__title}>Sunrise Kitchen & Bath</p>
              <div className={logo__items__img}>
                <Image
                  height={logoSize}
                  width={logoSize}
                  src={SunriseLogo}
                  alt="Sunrise Kitchen & Bath"
                />
              </div> */}
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
              title="Gladiator Home Repair"
              alt="Gladiator Home Repair"
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
        {/* <div className={design}>
          <span className={section__header}>Graphic Design</span>
          <div className={design__items}>
            <Image
              onLoad={() => setFirstGraphicLoaded(true)}
              src={brochure}
              alt="Experto Home Lock Brochure"
              style={{
                visibility: `${firstGraphicLoaded ? "visible" : "hidden"}`,
              }}
              width="200"
              height="282"
            />
            {!firstGraphicLoaded && (
              <Image
                style={{
                  display: `${!firstGraphicLoaded ? "block" : "none"}`,
                }}
                src={placeholder}
                width="200"
                height="282"
                alt="Loading"
              />
            )}

            <Image
              onLoad={() => setSecondGraphicLoaded(true)}
              src={lockBrochure}
              alt="Experto Home Services Brochure"
              style={{
                visibility: `${secondGraphicLoaded ? "visible" : "hidden"}`,
              }}
              width="200"
              height="282"
            />
            {!secondGraphicLoaded && (
              <Image
                style={{
                  display: `${!secondGraphicLoaded ? "block" : "none"}`,
                }}
                src={placeholder}
                width="200"
                height="282"
                alt="Loading"
              />
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
