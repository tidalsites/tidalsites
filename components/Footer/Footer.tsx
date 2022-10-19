import { FC } from "react";
import Link from "next/link";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__wrapper">
        <nav aria-label="Footer Navigation" className="Footer__nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <a href="/#Process">Process</a>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
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
