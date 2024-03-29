
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


// styles for this kit
import "assets/css/bootstrap.min.css";
// import "assets/scss/now-ui-kit.scss";
import "assets/css/now-ui-kit.css";
import "assets/demo/demo.css";
import "assets/demo/style.css";
import "assets/demo/darklightmode.css";
// import "assets/demo/darklightmode.css";
// import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  
   <Index/>,
  document.getElementById("root")
);
