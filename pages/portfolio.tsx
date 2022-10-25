import { FC } from "react";
// import "./Portfolio.scss";
import styles from "../styles/Portfolio.module.scss";
import Image from "next/image";
import { PortfolioPiece } from "../components/Portfolio/PortfolioPiece/PortfolioPiece";

// Logos
import GladiatorLogo from "../public/gladiator-logo.png";
import DictumSquareLogo from "../public/dictum-square-logo.png";
import AtoBLogo from "../public/atob-logo.png";
import TidalSitesLogo from "../public/tidalsites-logo.png";
import XPRTHomeLogo from "../public/xprt-logo.png";

// Digital Marketing Images
import brochure from "../public/brochure.svg";
import lockBrochure from "../public/lock-brochure.svg";

const Portfolio: FC = () => {
  const {
    portfolio,
    header,
    content,
    websites,
    sites,
    logos,
    logo__items,
    design,
    design__items,
    section__header,
  } = styles;
  return (
    <div className={portfolio}>
      <div className={header}>
        <span>PORTFOLIO</span>
      </div>
      <div className={content}>
        <div className={websites}>
          <span className={section__header}>WEBSITES</span>
          <div className={sites}>
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
            <Image src={GladiatorLogo} alt="Gladiator Home Services Logo" />
            <Image src={DictumSquareLogo} alt="Dictum Labs Logo" />
            <Image src={AtoBLogo} alt="AtoB Towing Logo" />
            <Image src={TidalSitesLogo} alt="Tidal Sites Logo" />
            <Image src={XPRTHomeLogo} alt="XPRT Home Logo" />
          </div>
        </div>
        <div className={design}>
          <span className={section__header}>Graphic Design</span>
          <div className={design__items}>
            <Image src={brochure} alt="Experto Home Lock Brochure" />
            <Image src={lockBrochure} alt="Experto Home Services Brochure" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
