import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./components/navBar/Navbar";
import playstoreLogo from "../src/assets/google-play-badge.png"

function App() {
  return (
    <div className="MainContainer">
      <Navbar />
      <div className="offerContainer" id="offerSection">
        <div className="offer-background-image">
          <h1>
            Lift, track, <p className="accentText">optimize.</p>
          </h1>
          <div className="buttonContainer">
            <a href="#featuresSection" className="btn btn-light me-3 mt-3">
              Features
            </a>
            <a href="" className="btn btn-success mt-3">
              Download from Google PlayStore
            </a>
          </div>
        </div>
      </div>
      <div className="featuresContainer" id="featuresSection">
        <div className="featuresImageSection">
          <div className="features-Section-Image"></div>
        </div>
        <div className="FeaturesTextSection">
          <h2 className="mb-5">
            Better, faster, <p className="accentText">stronger: </p>
          </h2>
          <p className="fs-4">Log your exercises</p>
          <p className="fs-4">Share your routines</p>
          <p className="fs-4">Compete with friends</p>
          <p className="text-success fs-3">Track your progress</p>
          <div className="buttonContainer">
            <a href="#" className="btn btn-success me-3">
              Download
            </a>
            <a href="#aboutSection" className="btn btn-secondary">
              About the app
            </a>
          </div>
        </div>
      </div>
      <div className="informationSection" id="aboutSection">
        <div className="about-background-image">
          <div className="textSection mt-3">
            <h2>Lift App is available on <p className="accentText">Google's PlayStore</p></h2>
            <img src={playstoreLogo} height={600} width={200} className="mb-3"/>
            <p className="text-white text center">For inquiries contact us at: liftapp@gmail.com</p>
          </div>
          <div className="emuladorImg mt-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
