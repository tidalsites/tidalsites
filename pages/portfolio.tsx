import { FC, useState } from "react";
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
import placeholder from "../public/placeholder-img.png";

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
    logo__items__img,
    design,
    design__items,
    section__header,
  } = styles;

  const [firstGraphicLoaded, setFirstGraphicLoaded] = useState<boolean>(false);
  const [secondGraphicLoaded, setSecondGraphicLoaded] =
    useState<boolean>(false);
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
            <div className={logo__items__img}>
              <Image src={GladiatorLogo} alt="Gladiator Home Services Logo" />
            </div>
            <div className={logo__items__img}>
              <Image src={DictumSquareLogo} alt="Dictum Labs Logo" />
            </div>
            <div className={logo__items__img}>
              <Image src={AtoBLogo} alt="AtoB Towing Logo" />
            </div>

            <div className={logo__items__img}>
              <Image src={TidalSitesLogo} alt="Tidal Sites Logo" />
            </div>

            <div className={logo__items__img}>
              <Image src={XPRTHomeLogo} alt="XPRT Home Logo" />
            </div>
          </div>
        </div>
        <div className={design}>
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
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
