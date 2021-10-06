import { FC, useState } from "react";
import "./Home.scss";

// Components
import { Hero } from "./Sections/Hero";
import { Services } from "./Sections/Services";
import { Process } from "./Sections/Process";
import { Portfolio } from "./Sections/Portfolio";

export const Home: FC = () => {
  const [contactDropdownActive, setContactDropdownActive] =
    useState<boolean>(false);
  return (
    <div
      className="Home"
      onClick={(e) => {
        if (
          e.target.toString() !==
            "mailto:tidalsites@gmail.com?subject=Inquiry" &&
          e.target.toString() !== "tel:757-550-0830"
        ) {
          e.preventDefault();
          contactDropdownActive && setContactDropdownActive(false);
        }
      }}
    >
      <Hero
        contactDropdownActive={contactDropdownActive}
        setContactDropdownActive={setContactDropdownActive}
      />
      <Services />
      <Process />
      <Portfolio />
    </div>
  );
};
