import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import { App } from "./Components/App/App";
import reportWebVitals from "./Utilities/reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
serviceWorkerRegistration.register();
