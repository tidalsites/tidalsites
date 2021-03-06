import { FC } from "react";
import "./Portfolio.scss";
import { PortfolioPiece } from "./PortfolioPiece/PortfolioPiece";

// Logos
import GladiatorLogo from "../../Assets/gladiator-logo.png";
import DictumSquareLogo from "../../Assets/dictum-square-logo.png";
import AtoBLogo from "../../Assets/atob-logo.png";
import TidalSitesLogo from "../../Assets/tidalsites-logo.png";
import XPRTHomeLogo from "../../Assets/xprt-logo.png";

export const Portfolio: FC = () => {
  return (
    <div className="Portfolio">
      <div className="Portfolio__header">
        <span>PORTFOLIO</span>
      </div>
      <div className="Portfolio__content">
        <div className="Portfolio__content__websites">
          <span className="Portfolio__content__websites__header">WEBSITES</span>
          <div className="Portfolio__content__websites__sites">
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
        <div className="Portfolio__content__logos">
          <span className="Portfolio__content__logos__header">LOGOS</span>
          <div className="Portfolio__content__logos__items">
            <img src={GladiatorLogo} alt="Gladiator Home Services Logo" />
            <img src={DictumSquareLogo} alt="Dictum Labs Logo" />
            <img src={AtoBLogo} alt="AtoB Towing Logo" />
            <img src={TidalSitesLogo} alt="Tidal Sites Logo" />
            <img src={XPRTHomeLogo} alt="XPRT Home Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
