import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product

import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProjectPage from "views/ProjectPage/ProjectPage";
import ExperiencePage from "views/Experience/ExperiencePage";
import AwardsPage from "views/Awards/AwardsPage";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      
      <Route path="/project-page" component={ProjectPage} />
      <Route path="/experience-page" component={ExperiencePage} />
      <Route path="/awards-page" component={AwardsPage} />
      <Route path="/" component={ProfilePage} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
