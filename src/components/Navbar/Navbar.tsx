import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Navbar.scss";

export const Navbar: FC = () => {
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
    <div className="Navbar">
      <div className="Navbar__nav">
        <div className="Navbar__nav__logo">
          <Link to="/">
            <img src={logo} alt="Tidal Sites logo" />
            <span>TIDAL SITES</span>
          </Link>
        </div>
        <div className="Navbar__nav__burger">
          <span className="material-icons md-24" onClick={activateDropdown}>
            menu_open
          </span>
        </div>
        <div className="Navbar__nav__links">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <a href="/services" onClick={deactivateDropdown}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="/#Process" onClick={deactivateDropdown}>
                PROCESS
              </a>
            </li>
            <li>
              <Link to="/portfolio" onClick={deactivateDropdown}>
                PORTFOLIO
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`Navbar__nav__links-mobile ${
            dropdownActivated ? "open" : ""
          }`}
        >
          <span
            onClick={deactivateDropdown}
            className="material-icons Navbar__nav__links-mobile__close"
          >
            close
          </span>
          <ul>
            <li>
              <Link to="/" onClick={deactivateDropdown}>
                HOME
              </Link>
            </li>
            <li>
              <a onClick={deactivateDropdown} href="/services">
                SERVICES
              </a>
            </li>
            <li>
              <a onClick={deactivateDropdown} href="/#Process">
                PROCESS
              </a>
            </li>
            <li>
              <Link to="/portfolio" onClick={deactivateDropdown}>
                PORTFOLIO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
