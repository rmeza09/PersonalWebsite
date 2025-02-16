import React from "react";
import Carousel from "./Carousel"; // Import the Carousel component

import NASALogo from "../assets/NASA-Logo.svg.png";
import JPLLogo from "../assets/Jet_Propulsion_Laboratory_logo.svg.png";
import AFOSRLogo from "../assets/AFOSR+Logo.png";


import TempControl1 from "../assets/IMG_7347.jpg";
import TempControl2 from "../assets/IMG_7318.jpeg";
import TempControl3 from "../assets/IMG_7351.jpeg";
import TempControl4 from "../assets/IMG_7369.jpeg";

import Hermes1 from "../assets/Hermes Assembly.jpg";
import Hermes2 from "../assets/HermesFinalCadPic.png";
import Hermes3 from "../assets/IMG_4752 Large.jpeg";
import Hermes4 from "../assets/IMG_4775.jpg";
import Hermes5 from "../assets/IMG_4786.jpg";
import Hermes6 from "../assets/IMG_9954.jpg";

import CaptureImg from "../assets/Capture.PNG";

import Submarine1 from "../assets/72315635017__05B0C390-E4D2-4AD5-ACB8-7003D435C667.jpg";
import Submarine2 from "../assets/IMG_7434.jpg";
import Submarine3 from "../assets/IMG_7435.jpg";

//import TempControlVid from "../assets/IMG_7370.mp4";
//import submarinePrint from "../assets/72315635017__05B0C390-E4D2-4AD5-ACB8-7003D435C667.jpg";

function Engineering() {
  return (
    
    <div>
      <center>
      <p>Learn about my background, my journey as an engineer, and my interests.</p>
      </center>
      <div className="images-container">
        <img src={NASALogo} alt="NASA" className="company-image" />
        <img src={JPLLogo} alt="Jet Propulsion Laboratory" className="company-image" />
        <img src={AFOSRLogo} alt="AFOSR" className="company-image" />
      </div>

      <div className="projects-container">
        <div className="project-item">
        
          <h3 className="project-title">PID Temperature Controller - Spring 2025</h3>
          <p className="project-description">
            A research project focused on solid-state rocketry, performed at the University of Maryland.
          </p>
          <Carousel 
            media={[TempControl4, TempControl1, TempControl3, TempControl2]} 
            altText="Temperature Controller"
          />

        </div>
    
        <div className="project-item">
        
          <h3 className="project-title">HERMES Lunar Transport Vehicle - Spring 2023</h3>
          <p className="project-description">
            A research project focused on solid-state rocketry, performed at the University of Maryland.
          </p>
          <div className="button-container">             
            <a href="https://web1.eng.famu.fsu.edu/me/senior_design/2023/team517/" className="link-button" target="_blank" rel="noopener noreferrer">
                Senior Design Website
            </a>
          </div>
          <Carousel 
            media={[Hermes1, Hermes5, Hermes6, Hermes3, Hermes4, Hermes2]} 
            altText="HERMES Project"
          />

        </div>

        <div className="project-item">
        
          {/* ✅ Title & Text on Top */}
          <h3 className="project-title">ENME 712 Solid State Rocket Test Bed - Spring 2024</h3>
          <p className="project-description">
            A research project focused on solid-state rocketry, performed at the University of Maryland.
          </p>

          {/* ✅ Larger Carousel Below */}
          <Carousel 
            media={[CaptureImg]} 
            altText="HERMES Project"
          />

        </div>

        <div className="project-item">
        
          {/* ✅ Title & Text on Top */}
          <h3 className="project-title">Motor Control for Underwater Application - Fall 2023</h3>
          <p className="project-description">
            A research project focused on solid-state rocketry, performed at the University of Maryland.
          </p>

          {/* ✅ Larger Carousel Below */}
          <Carousel 
            media={[Submarine1, Submarine2, Submarine3]} 
            altText="HERMES Project"
          />

        </div>
      </div>
    </div>
  );
}

export default Engineering;
