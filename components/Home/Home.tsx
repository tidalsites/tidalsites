import { Dispatch, FC, SetStateAction } from "react";
import "./Home.scss";

// Components
import { Hero } from "./Sections/Hero";
import { Services } from "./Sections/Services";
import { Highlights } from "./Sections/Highlights";
import { Process } from "./Sections/Process";
import { Portfolio } from "./Sections/Portfolio";

interface IHomeProps {
  setShowContactModal: Dispatch<SetStateAction<boolean>>;
}

export const Home: FC<IHomeProps> = ({ setShowContactModal }) => {
  return (
    <div className="Home">
      <Hero setShowContactModal={setShowContactModal} />
      <Services />
      <Portfolio />
      <Process />
      <Highlights />
    </div>
  );
};
