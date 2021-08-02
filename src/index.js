import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {BrowserRouter } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product


import Rout from "./routes"
var hist = createBrowserHistory();

ReactDOM.render(
      <Rout/>
    ,
 
  document.getElementById('root')
);
