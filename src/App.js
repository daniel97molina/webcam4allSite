import React from "react";
import banner from "./Destacada.jpg";
import dowload from "./en_badge_web_generic.png";
import logoBanner from "./logoBanner.jpg";
import img1Url from "./1URL.jpg";
import img2Browser from "./2Browser.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import "./App.css";
import car1 from "./image1.jpg";
import car2 from "./image2.jpg";
//import car3 from "./image3.jpg";
import car4 from "./image4.jpg";
import car5 from "./image5.jpg";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-wrapper">
          <img src={banner} className="banner" alt="logo" />
          <div className="right">
            <h4>Transform your Android device into a HD Webcam</h4>
            <img src={dowload} className="downloadBanner" alt="download" />
            <img src={logoBanner} className="logoBanner" alt="logo" href="webcam" />
          </div>
        </div>
      </header>

      <main>
        <Carousel
          autoPlay={5000}
          animationSpeed={1000}
          className="carousel"
          centered
          infinite
          arrows
          slidesPerPage={3}
          breakpoints={{
            1240: {
              slidesPerPage: 2,
              arrows: true
            },
            800: {
              slidesPerPage: 1,
              arrows: true
            }
          }}
        >
          <img src={car5} className="bordered" alt="image5" />
          
          <img src={car2} className="bordered" alt="image2" />
          <a href="#skype"><img src={car4} className="bordered" alt="image4"/></a>
          {/* <img src={car3} className="bordered" alt="image3" /> */}
          <img src={car1} className="bordered" alt="image1" />
          
        </Carousel>

        <h1 className="title">
          Connect through the browser (Chrome, Firefox and Edge)
        </h1>
        <div className="Aligner notAligner">
          <div className="half">
            <img src={img1Url} alt="Copy This url..." className="bordered" />
          </div>
          <div className="half">
            <img
              src={img2Browser}
              alt="...Into your browser"
              className="bordered"
            />
          </div>
        </div>

        <h1 className="title" id="skype">
          Connect to Zoom, Skype or any other program in 4 simple steps
        </h1>
        <div className="Aligner notAligner">
          <div className="half">
            <div className="bordered Aligner">
              <a
                href="https://splitcam.com/download"
                className="downloadSplitCam"
              >
                <h2>
                  <span>1. </span>Download SplitCam for FREE (Windows & macOS)
                </h2>
                <h5>Click here</h5>
              </a>
            </div>
          </div>

          <div className="half">
            <div className="bordered Aligner">
              <div>
                <h2>
                  <span>2. </span>Add browser in SplitCam
                </h2>
                <img src={img5} alt="Add browser" />
              </div>
            </div>
          </div>
        </div>

        <div className="Aligner notAligner">
          <div className="half">
            <div className="bordered Aligner">
              <div>
                <h2>
                  <span>3. </span>Enter the URL shown in the app and click on
                  Add
                </h2>
                <img src={img6} alt="Enter url" />
              </div>
            </div>
          </div>
          <div className="half">
            <div className="bordered Aligner">
              <div>
                <h2>
                  <span>4. </span>Select 'SplitCam Video Driver' as video source
                  in Zoom or any other program
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <h3>503 Studios</h3>
        <a href="./privacy">Privacy Policy</a>
      </footer>
    </div>
  );
}


export default App;
