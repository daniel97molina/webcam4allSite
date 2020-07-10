import React from "react";
import car1 from "../images/image1.jpg";
import car2 from "../images/image2.jpg";
import car4 from "../images/image4.jpg";
import car5 from "../images/image5.jpg";
import img1Url from "../images/1URL.jpg";
import img2Browser from "../images/2Browser.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import obs1 from "../images/obs1.jpg";
import obs2 from "../images/obs2.jpg";
import obs3 from "../images/obs3.jpg";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Landing = () => {
  return (
    <main>
      <div id="features">
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
              arrows: true,
            },
            800: {
              slidesPerPage: 1,
              arrows: true,
            },
          }}
        >
          <img src={car5}  alt="image5" />
          <img src={car2}  alt="image2" />
          <a href="#webcam">
            <img src={car4}  alt="image4" />
          </a>
          {/* <img src={car3} className="bordered" alt="image3" /> */}
          <img src={car1} alt="image1" />
        </Carousel>
      </div>

      <h1 className="title" id="webcam">
        Use it in Zoom, Skype or any other program in 4 simple steps
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
                <span>3. </span>Enter the URL shown in the app and click on Add
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
              <p>Note: SplitCam must remain open</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="title">Use it in OBS Studio</h1>
      <div className="Aligner notAligner">
        <div className="half">
          <div className="bordered Aligner obs">
            <div>
              <h2>
                <span>1. </span>Add a 'Browser' as a source
              </h2>
              <img src={obs1} alt="Add a Browser" />
            </div>
          </div>
        </div>

        <div className="half">
          <div className="bordered Aligner obs">
            <div>
              <h2>
                <span>2. </span>Enter a name
              </h2>
              <img src={obs2} alt="Enter a name" />
            </div>
          </div>
        </div>
      </div>
      <div className="Aligner notAligner">
        <div className="half bordered Aligner obs">
          <div>
            <h2>
              <span>3. </span>Enter the URL shown in the app and the resolution
              you've selected
            </h2>
            <img src={obs3} alt="Enter the URL and resolution" />
          </div>
        </div>
      </div>

      <h1 className="title">
        Connect through your browser (Chrome, Firefox and Edge)
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
      <h1 id="FAQs" className="title">
        Frequently Asked Questions (FAQs)
      </h1>
      <h3 className="question">
        Should the phone be connected to the same network as my computer?
      </h3>
      <p className="answer">
        Yes, both your phone and computer must be connected to the same local
        network, for example, connected to the same wi-fi.
      </p>
      <h3 className="question">
        Can my computer be connected through Ethernet?
      </h3>
      <p className="answer">
        Yes, your PC can be connected through Ethernet and your phone through
        wi-fi, as long as they're in the same network.
      </p>
      <h3 className="question">Will it use my internet bandwidth?</h3>
      <p className="answer">
        No, all the data remains in your local network, so it won't affect nor
        use your internet bandwidth
      </p>
      <h3 className="question">Are you the owner of SplitCam?</h3>
      <p className="answer">
        No, We recommend using SplitCam, but we're not related to them in any
        form
      </p>
    </main>
  );
};

export default Landing;
