import React from "react";
import banner from "./Destacada.jpg";
import dowload from "./en_badge_web_generic.png";
import logoBanner from "./logoBanner.jpg";
import "./App.css";
import Landing from "./Landing";
import Privacy from "./Privacy";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="topBar">
          <a className="first" href="./">Webcam4all</a>
          <a href="./#FAQs">FAQs</a>
          <a href="./#webcam">How to use it</a>
          <a href="./#features">Features</a>
        </div>
        <header className="App-header">
          <div className="header-wrapper">
            <a href="./">
              <img src={banner} className="banner" alt="logo" />{" "}
            </a>
            <div className="right">
              <h4>Transform your Android device into a HD Webcam</h4>
              <img src={dowload} className="downloadBanner" alt="download" />
              <img
                src={logoBanner}
                className="logoBanner"
                alt="logo"
                href="webcam"
              />
            </div>
          </div>
        </header>

        <Route path="/home" exact component={Landing} />
        <Route path="/" exact component={Landing} />
        <Route path="/privacy" exact component={Privacy} />

        <footer>
          <h3>503 Studios</h3>
          <a href="./privacy">Privacy Policy</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
