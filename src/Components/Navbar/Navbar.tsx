import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import "./Navbar.scss";

export const Navbar: FC = () => {
  const [dropdownActivated, setDropdownActivated] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDropdownActivated(false);
    });
  }, []);

  return (
    <div className="Navbar">
      <div className="Navbar__nav">
        <div className="Navbar__nav__logo">
          <img src={logo} alt="Tidal Sites logo" />
          <span>TIDAL SITES</span>
        </div>
        <div className="Navbar__nav__burger">
          <span
            className="material-icons md-24"
            onClick={() => setDropdownActivated(true)}
          >
            menu_open
          </span>
        </div>
        <div className="Navbar__nav__links">
          <ul>
            <li>
              <a href="#Services" onClick={() => setDropdownActivated(false)}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="#Process" onClick={() => setDropdownActivated(false)}>
                PROCESS
              </a>
            </li>
            <li>
              <a onClick={() => setDropdownActivated(false)} href="#Portfolio">
                PORTFOLIO
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`Navbar__nav__links-mobile ${dropdownActivated && "open"}`}
        >
          <span
            onClick={() => setDropdownActivated(false)}
            className="material-icons Navbar__nav__links-mobile__close"
          >
            close
          </span>
          <ul>
            <li>
              <a onClick={() => setDropdownActivated(false)} href="#Services">
                SERVICES
              </a>
            </li>
            <li>
              <a onClick={() => setDropdownActivated(false)} href="#Process">
                PROCESS
              </a>
            </li>
            <li>
              <a onClick={() => setDropdownActivated(false)} href="#Portfolio">
                PORTFOLIO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
