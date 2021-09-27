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
            onClick={() => setDropdownActivated(!dropdownActivated)}
          >
            menu_open
          </span>
        </div>
        <div className="Navbar__nav__links">
          <ul>
            <li>
              <a href="#Services">SERVICES</a>
            </li>
            <li>
              <a href="#Process">PROCESS</a>
            </li>
            {/* <li>
              <Link to="/">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/">TIDBITS</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li> */}
          </ul>
        </div>
        <div
          className={`Navbar__nav__links-mobile ${dropdownActivated && "open"}`}
        >
          <ul>
            <li>
              <Link to="/">SERVICES</Link>
            </li>
            {/* <li>
              <Link to="/">PROCESS</Link>
            </li>
            <li>
              <Link to="/">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/">TIDBITS</Link>
            </li>
            <li>
              <Link to="/">ABOUT</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
