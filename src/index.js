import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Home } from "./pages/Home";

import "./assets/styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
