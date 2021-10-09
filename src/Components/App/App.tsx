import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// Components
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../Home/Home";
import { Banner } from "../Banner/Banner";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import { Footer } from "../Footer/Footer";

export const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Banner text="This site is still under construction. Please be patient as we build out our own experience" />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
