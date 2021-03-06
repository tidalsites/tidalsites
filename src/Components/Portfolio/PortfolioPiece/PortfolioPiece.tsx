import { FC } from "react";
import "./PortfolioPiece.scss";

import ProsoftWeb from "../../../Assets/prosoft-web.png";
import ProsoftMobile from "../../../Assets/prosoft-mobile.png";
import AtoBWeb from "../../../Assets/atob-web.png";
import AtoBMobile from "../../../Assets/atob-mobile.png";
import HHGWeb from "../../../Assets/hartshollergraphics-web.png";
import HHGMobile from "../../../Assets/hartshollergraphics-mobile.png";
import DWBWeb from "../../../Assets/dwbuilders-web.png";
import DWBMobile from "../../../Assets/dwbuilders-mobile.png";
import XPRTHomeWeb from "../../../Assets/xprt-web.png";
import XPRTHomeMobile from "../../../Assets/xprt-mobile.png";

interface IPortfolioPieceProps {
  project_name: string;
  project_img: string;
  project_img_alt: string;
  project_type: string;
}

export const PortfolioPiece: FC<IPortfolioPieceProps> = ({
  project_name,
  project_img,
  project_img_alt,
  project_type,
}) => {
  let web_image = ProsoftWeb;
  let mobile_image = ProsoftMobile;
  switch (project_img) {
    case "atob-web":
      web_image = AtoBWeb;
      mobile_image = AtoBMobile;
      break;
    case "hhg-web":
      web_image = HHGWeb;
      mobile_image = HHGMobile;
      break;
    case "dwbuilders-web":
      web_image = DWBWeb;
      mobile_image = DWBMobile;
      break;
    case "xprt-web":
      web_image = XPRTHomeWeb;
      mobile_image = XPRTHomeMobile;
      break;
    default:
      break;
  }
  return (
    <div className="PortfolioPiece">
      <div className="PortfolioPiece__name">{project_name}</div>
      <div className="PortfolioPiece__corner"></div>
      <div className="PortfolioPiece__img">
        <img src={web_image} alt={project_img_alt} />
        <img src={mobile_image} alt="AtoB Towing Mobile Website view" />
      </div>
      <div className="PortfolioPiece__type">{project_type}</div>
    </div>
  );
};
