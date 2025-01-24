import React from "react";
import NASALogo from "../assets/NASA-Logo.svg.png";
import JPLLogo from "../assets/Jet_Propulsion_Laboratory_logo.svg.png";
import AFOSRLogo from "../assets/AFOSR+Logo.png";
import CaptureImg from "../assets/Capture.PNG";
import TempControl from "../assets/IMG_7347.jpg";
import submarinePrint from "../assets/72315635017__05B0C390-E4D2-4AD5-ACB8-7003D435C667.jpg";

function Engineering() {
  return (
    <div>
      <p>Learn about my background, my journey as an engineer, and my interests.</p>

      <div className="images-container">
        <img src={NASALogo} alt="NASA" className="company-image" />
        <img src={JPLLogo} alt="Jet Propulsion Laboratory" className="company-image" />
        <img src={AFOSRLogo} alt="AFOSR" className="company-image" />
      </div>

      <div className="item-container">
        <img src={TempControl} alt="Temperature Controller" className="profile-image" />
        <div className="item-text">
          <h3>PID Temperature Controller - Spring 2025</h3>
          <p>
            A research project focused on solid-state rocketry, performed at the University of Maryland.
          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={CaptureImg} alt="Rocket Test Bed" className="profile-image" />
        <div className="item-text">
          <h3>ENME 712 Solid State Rocket Test Bed - Spring 2024</h3>
          <p>
            A research project focused on solid-state rocketry, performed at the University of Maryland.
          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={submarinePrint} alt="Submarine" className="profile-image" />
        <div className="item-text">
          <h3>Motor Control for Underwater Application - Fall 2023</h3>
          <p>
            A research project focused on solid-state rocketry, performed at the University of Maryland.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Engineering;
