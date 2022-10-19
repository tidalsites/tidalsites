import Link from "next/link";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  const {
    footer,
    footer__wrapper,
    footer__nav,
    footer__contact,
    footer__contact__header,
    footer__contact__phone,
    footer__contact__email,
    footer__copyright,
  } = styles;
  return (
    <div className={footer}>
      <div className={footer__wrapper}>
        <nav aria-label="footer Navigation" className={footer__nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/#Process">Process</a>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <div className={footer__contact}>
          <span className={footer__contact__header}>Contact Us Today</span>
          <div className={footer__contact__phone}>
            <span className="material-icons" role="img">
              phone
            </span>
            <a href="tel:757-550-0830">(757) 550-0830</a>
          </div>
          <div className={footer__contact__email}>
            <span className="material-icons" role="img">
              email
            </span>
            <a href="mailto:devin@tidalsites.com?subject=Inquiry">
              devin@tidalsites.com
            </a>
          </div>
        </div>
      </div>
      <div className={footer__copyright}>&copy; Tidal Sites, LLC 2022</div>
    </div>
  );
};
