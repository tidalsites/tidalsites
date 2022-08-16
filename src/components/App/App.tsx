import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
// import { Banner } from "../Banner/Banner";
import { ContactModal } from "../ContactModal/ContactModal";
import { Portfolio } from "../Portfolio/Portfolio";
import { Services } from "../Services/Services";
import { Footer } from "../Footer/Footer";
import { NotFound } from "../NotFound/NotFound";
import { Process } from "../Process/Process";

export const App: FC = () => {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  useEffect(() => {
    showContactModal
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [showContactModal]);
  return (
    <div className="App">
      <Router>
        {/* <Banner text="This site is still under construction. Please be patient as we build out our own experience" /> */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home setShowContactModal={setShowContactModal} />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      {showContactModal ? (
        <ContactModal setShowContactModal={setShowContactModal} />
      ) : (
        ""
      )}
    </div>
  );
};
