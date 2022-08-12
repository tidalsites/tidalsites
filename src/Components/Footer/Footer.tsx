import { FC } from "react";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__contact">
          <span className="Footer__contact__header">Contact Us Today</span>
          <div className="Footer__contact__phone">
            <span className="material-icons" role="img">
              phone
            </span>
            <a href="tel:757-550-0830">(757) 550-0830</a>
          </div>
          <div className="Footer__contact__email">
            <span className="material-icons" role="img">
              email
            </span>
            <a href="mailto:devin@tidalsites.com?subject=Inquiry">
              devin@tidalsites.com
            </a>
          </div>
        </div>
      </div>
      <div className="Footer__copyright">&copy; Tidal Sites, LLC 2022</div>
    </div>
  );
};
