import React from "react";
import banner from "../images/Destacada.jpg";
import dowload from "../images/en_badge_web_generic.png";
import logoBanner from "../images/logoBanner.jpg";

const Header = () => {
  return (
    <div>
      <div className="topBar">
        <a className="first" href="./">
          Webcam4all
        </a>
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
            <h4>Transform your Android device into a 1080p Webcam</h4>
            <a href="https://play.google.com/store/apps/details?id=dm.camera.webcamxipcamera" target="_blank" rel="noopener noreferrer">
              <img src={dowload} className="downloadBanner" alt="download" />
              <img
                src={logoBanner}
                className="logoBanner"
                alt="logo"
                href="webcam"
              />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
