// Components
import { Hero } from "../components/Home/Sections/Hero";
import { Services } from "../components/Home/Sections/Services";
import { Highlights } from "../components/Home/Sections/Highlights";
import { Process } from "../components/Home/Sections/Process";
import { Portfolio } from "../components/Home/Sections/Portfolio";
import { ContactModal } from "../components/ContactModal/ContactModal";
import { useState } from "react";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <div className={styles.Home}>
      <Hero setShowContactModal={setShowContactModal} />
      <Services />
      <Portfolio />
      <Process />
      <Highlights />
      {showContactModal ? (
        <ContactModal setShowContactModal={setShowContactModal} />
      ) : (
        ""
      )}
    </div>
  );
}
