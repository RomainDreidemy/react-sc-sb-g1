import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./assets/font/RoobertTRIAL-Regular.otf"

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
