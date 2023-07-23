import { FC, useState, useEffect } from "react";
import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

export const Header: FC = () => {
  const {
    navbar,
    navbar__nav,
    navbar__nav__burger,
    navbar__nav__links,
    navbar__nav__links_mobile,
    navbar__nav__links_mobile__close,
    navbar__nav__logo,
    open,
    link,
  } = styles;
  const [dropdownActivated, setDropdownActivated] = useState<boolean>(false);

  const activateDropdown = () => {
    document.body.classList.add("no-scroll");
    setDropdownActivated(true);
  };

  const deactivateDropdown = () => {
    document.body.classList.remove("no-scroll");
    setDropdownActivated(false);
  };

  useEffect(() => {
    window.addEventListener("resize", deactivateDropdown);
  }, []);

  return (
    <div className={navbar}>
      <div className={navbar__nav}>
        <div className={navbar__nav__logo}>
          <Link href="/">
            <div className={link}>
              <Image src={logo} alt="Tidal Sites" width="35" height="35" />
              <span aria-hidden>TIDAL SITES</span>
            </div>
          </Link>
        </div>
        <div className={navbar__nav__burger}>
          <span className="material-icons md-24" onClick={activateDropdown}>
            menu_open
          </span>
        </div>
        <nav aria-label="Primary Navigation" className={navbar__nav__links}>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/services">SERVICES</Link>
            </li>
            <li>
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${navbar__nav__links_mobile} ${
            dropdownActivated ? open : ""
          }`}
        >
          <span
            onClick={deactivateDropdown}
            className={`material-icons ${navbar__nav__links_mobile__close}`}
          >
            close
          </span>
          <ul>
            <li>
              <Link href="/">
                <span onClick={deactivateDropdown}>HOME</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span onClick={deactivateDropdown}>SERVICES</span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <span onClick={deactivateDropdown}>PORTFOLIO</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span onClick={deactivateDropdown}>ABOUT</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
