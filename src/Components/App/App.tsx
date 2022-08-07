import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
// import { Banner } from "../Banner/Banner";
import { ContactModal } from "../ContactModal/ContactModal";
import { Portfolio } from "../Portfolio/Portfolio";
import { Services } from "../Services/Services";
import { Footer } from "../Footer/Footer";

export const App: FC = () => {
  const [showContactModal, setShowContactModal] = useState<boolean>(true);

  useEffect(() => {
    showContactModal
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [showContactModal]);
  return (
    <div className="App">
      <Router>
        {/* <Banner text="This site is still under construction. Please be patient as we build out our own experience" /> */}
        <Navbar setShowContactModal={setShowContactModal} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
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
