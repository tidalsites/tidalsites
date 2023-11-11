import { FC } from "react";
import styles from "../../styles/PortfolioPiece.module.scss";
import Image from "next/image";

import ProsoftWeb from "@/public/assets/images/prosoft-web.png";
import ProsoftMobile from "@/public/assets/images/prosoft-mobile.png";
import AtoBWeb from "@/public/assets/images/atob-web.png";
import AtoBMobile from "@/public/assets/images/atob-mobile.png";
import HHGWeb from "@/public/assets/images/hartshollergraphics-web.png";
import HHGMobile from "@/public/assets/images/hartshollergraphics-mobile.png";
import DWBWeb from "@/public/assets/images/dwbuilders-web.png";
import DWBMobile from "@/public/assets/images/dwbuilders-mobile.png";
import XPRTHomeWeb from "@/public/assets/images/xprt-web.png";
import XPRTHomeMobile from "@/public/assets/images/xprt-mobile.png";
import ConcrecalWeb from "@/public/assets/images/concrecal-web.png";

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
  const { portfolioPiece, name, corner, img, type } = styles;
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
    case "concrecal-web":
      web_image = ConcrecalWeb;
    default:
      break;
  }
  return (
    <div className={portfolioPiece}>
      <div className={name}>{project_name}</div>
      {/* <div className={corner}></div> */}
      <div className={img}>
        <Image src={web_image} alt={project_img_alt} />
        {/* <Image src={mobile_image} alt="AtoB Towing Mobile Website view" /> */}
      </div>
      {/* <div className={type}>{project_type}</div> */}
    </div>
  );
};
