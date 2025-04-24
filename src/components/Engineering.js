import React from "react";
import Carousel from "./Carousel"; // Import the Carousel component

import NASALogo from "../assets/NASA-Logo.svg.png";
import JPLLogo from "../assets/Jet_Propulsion_Laboratory_logo.svg.png";
import AFOSRLogo from "../assets/AFOSR+Logo.png";


import TempControl1 from "../assets/IMG_7347.jpg";
import TempControl2 from "../assets/IMG_7318.jpeg";
import TempControl3 from "../assets/IMG_7351.jpeg";
import TempControl4 from "../assets/IMG_7369.jpeg";
import TempControl5 from "../assets/IMG_7443.jpg";
import TempControl7 from "../assets/controller_pic2.png";
import TempControl6 from "../assets/controller_pic.png";

import Hermes1 from "../assets/Hermes Assembly.jpg";
import Hermes3 from "../assets/IMG_4752 Large.jpeg";
import Hermes4 from "../assets/IMG_4775.jpg";
import Hermes5 from "../assets/IMG_4786.jpg";
import Hermes6 from "../assets/IMG_9954.jpg";

import CaptureImg from "../assets/unnamed303.png";
import CaptureImg2 from "../assets/unnamed404.png";
import proposal from "../assets/ENME712 FINAL PROJECT_1.pdf";

import Submarine1 from "../assets/72315635017__05B0C390-E4D2-4AD5-ACB8-7003D435C667.jpg";
import Submarine2 from "../assets/IMG_7434.jpg";
import Submarine3 from "../assets/IMG_7435.jpg";

import Drone1 from "../assets/drone_animation.gif";
import Drone2 from "../assets/hovering_2D_pole_placement.gif";
import Drone3 from "../assets/drone_output.png";
import Drone4 from "../assets/Screenshot 2025-02-25 010820.png";
import Drone5 from "../assets/drone_3d_output.png";

import DAQapp1 from "../assets/Picture_experiment_Setup.png";
import DAQapp2 from "../assets/Picture2_experiment.png";
import DAQapp3 from "../assets/Sensing_FrontEndCapture-ezgif.com-video-to-gif-converter.gif";
import DAQapp4 from "../assets/VideoProject-ezgif.com-video-to-gif-converter.gif";

import Dyno1 from "../assets/section3zoomimage.png";
//import Dyno2 from "../assets/ArticleMount2.png";
import Dyno3 from "../assets/ArticleMount3.png";
import Dyno4 from "../assets/BrakeAssembly.png";
import Dyno5 from "../assets/overviewimage.png";
//import Dyno6 from "../assets/DynoAssembly.png";
import Dyno7 from "../assets/section2image.png";
import Dyno8 from "../assets/FEA.png";
import Dyno9 from "../assets/QuakeRestraint.png";

//import TempControlVid from "../assets/IMG_7370.mp4";
//import submarinePrint from "../assets/72315635017__05B0C390-E4D2-4AD5-ACB8-7003D435C667.jpg";

function Engineering() {
  return (
    
    <div>
      <center>
      
      </center>
      <div className="images-container">
        <img src={NASALogo} alt="NASA" className="company-image" />
        <img src={JPLLogo} alt="Jet Propulsion Laboratory" className="company-image" />
        <img src={AFOSRLogo} alt="AFOSR" className="company-image" />
      </div>

      <div className="projects-container">
        <div className="project-item">
          
          <h3 className="project-title">JPL - Dynamometer Assembly - Summer/Fall 2023</h3>
          <p className="project-description">
          During my eight-month internship, I worked on Cryo Dyno, a cryogenic dynamometer. A dynamometer is a device used to measure the torque and power of a rotating assembly. I developed this robotic actuator test stand from problem definition in May, to manufacturing in August, and technical documentation in November. The goal was to create a test environment capable of stressing an actuator/motor under heavy cross-moment loading around the output shaft while operating in extreme temperatures. 
          </p>
          
          <Carousel 
            media={[Dyno5, Dyno7, Dyno1, Dyno3, Dyno4, Dyno8]} 
            altText="Temperature Controller"
          />

          <p className="project-description">
          The cryogenic chamber chosen for this project can reach -184 degrees Celsius. The cross moment loading mechanism I designed can deliver 388Nm. The final assembly met targeted performance within 3% of the established goals. Beyond the CAD work, I supported design with FEA analysis for structural and temperature validation. Also, confirming CNC and water-jet manufacturability through Proto Labs. GD&T was implemented to maintain shaft alignments, communicate machining tolerances, and create dowel alignment features. Key challenges included bearing selections, bolted joint analysis, insulation design, and earthquake safety.
          </p>

        </div>


        <div className="project-item">
          
          <h3 className="project-title">Data Acquisition Desktop Application - Spring 2025</h3>
          <p className="project-description">
          In this project I built a 5kHz scanning system for working with the Hyperion SI155 optical sensing instrument. The Luna Innovations Python API, for communicating with the SI155, is used to call for the peak wavelengths and intensity measurements of an array of FBG sensors. I set up a LAN connection to the instrument using TCP/IP protocol with a static IP address and a subnet mask configuration. The PyQt6 front-end application controls the experimental setup, graphs live data and writes to an HDF5 file sampling at 10kHz.           
          </p>
          
          <Carousel 
            media={[DAQapp4, DAQapp3, DAQapp1, DAQapp2]} 
            altText="Temperature Controller"
          />

          <p className="project-description">
          The motivation for this project was to create a tool that can be deployed on a PC to interface with the SI155 sensing instrument giving you access to file handling tools, like immediate conversion to CSV. The current hardware uses an array of 5 FBG sensors to sample vibration and temperature effects on a stainless-steel structure surface. The codebase employs object-oriented programming and concurrent processing with PyQt threading to manage both front-end and back-end tasks efficiently.          
          </p>

        </div>


        <div className="project-item">
        
          <h3 className="project-title">PID Temperature Controller - Fall 2024</h3>
          <p className="project-description">
          In this project I developed a handheld temperature control device to support sensor experiments. I wrote and tuned a PID controller for feedback temperature control using a J-type thermocouple with an MCP9600 amplifier board. This is a N-channel MOSFET circuit powered by a 25 V power supply, controlled through PWM with an Arduino Nano Every. Using a rotatory encoder for user input to manually tune PID parameters and set target temperatures, displaying system data on two OLED screens through i2c protocol.
          </p>
          
          <Carousel 
            media={[TempControl5, TempControl6, TempControl4, TempControl7, TempControl1, TempControl3]} 
            altText="Temperature Controller"
          />

          <p className="project-description">
          The motivation for this project was to add a flexible heating element to a thin panel surface, which can be excited with an impact hammer to simultaneously measure vibration and temperature effects using FBG sensors. In lieu of having access to a Mach 6 tunnel before traveling to NASA Langley, I designed an analogous system which I can track through a single point vibrometer and the sensor network. The final goal is to test the measurement decoupling algorithm for sensor data processing.
          </p>

        </div>
    
        <div className="project-item">
        
          <h3 className="project-title">NASA - HERMES Lunar Transport Vehicle - Spring 2023</h3>

          <div className="button-container">             
            <a href="https://web1.eng.famu.fsu.edu/me/senior_design/2023/team517/" className="link-button" target="_blank" rel="noopener noreferrer">
                Senior Design Website
            </a>
          </div>

          <p className="project-description">
              HERMES (Heavy Equipment Rover for lunar Mobility Expansion, and Sustainability) was designed as part of our Capstone senior design project sponsored by NASA Marshall Space Flight Center. My team and I worked to create a prototype which ultimately delivered the ability to lift 314lbs of cargo with a chassis weight of 104lbs. As part of this team I lead the vehicle design process and conducted the structural finite element analysis. As a team we addressed mechatronics and vehicle design challenges to deliver the final prototype. 
          </p>          
          <Carousel 
            media={[Hermes1, Hermes5, Hermes6, Hermes3, Hermes4]} 
            altText="HERMES Project"
          />

          <p className="project-description">
          The motivation for this project was to create a highly compact lightweight design with the robustness to traverse rough lunar terrain while carrying cargo shipments. This was a proof of concept project to inspire design for lunar equipment vehicles needed to establish lunar habitation modules as part of NASA’s Artemis missions.
          </p>

        </div>

        

        <div className="project-item">
        
          <h3 className="project-title">Quadcopter Control Design and Simulation - Fall 2023</h3>
          <p className="project-description">
          This project aimed to develop a target setpoint controller for a 4-rotor drone, leveraging a physics-informed control system to regulate its movement. The drone's dynamics were modeled using a state-space representation, capturing translational and rotational motion across three dimensions. A pole placement method was employed to design a stabilizing feedback controller, ensuring the drone could track desired positions and orientations effectively. Both animations display scenarios where an initial disturbance affects the flight trajectory chosen toward the targeted endpoint of x=0, y=0, z=0.           </p>        
          <Carousel 
            media={[Drone1, Drone4, Drone5, Drone2, Drone3]} 
            altText="Temperature Controller"
          />

          <p className="project-description">
          The primary motivation was to design a precise and robust control system that could actuate the drone efficiently using physics-based insights. The results confirmed that the controller successfully stabilized the drone, achieving smooth transitions toward desired states. The project reinforced key control theory concepts, including state feedback, pole placement, and system modeling, providing valuable insights for real-world UAV stabilization.          </p>

        </div>

        <div className="project-item">
        
          {/* ✅ Title & Text on Top */}
          <h3 className="project-title">Solid State Rocket Test Bed - Spring 2024</h3>
          <p className="project-description">
          In this project I designed a solid-state rocket test bed as part of a mock research proposal to justify budgetary spending for research into solid state propellant erosion, within the combustion chamber of the rocket and how a variety of factors affect the erosion rate. The objective of this proposal was to produce a testing apparatus for a solid-state propellant model rocket body. The erosion rate is directly correlated to the burning rate of the propellant and thus the thrust produced by the model rocket. I quoted budgetary costs for the bill of materials and man hours while creating an example timeline for the execution of the research effort.           </p>

          {/* ✅ Larger Carousel Below */}
          <Carousel 
            media={[CaptureImg2, CaptureImg]} 
            altText="HERMES Project"
          />

          <div className="button-container">             
            <a href={proposal} className="link-button" download>
              Download Mock Research Proposal
            </a>
          </div>


        </div>

        <div className="project-item">
        
          {/* ✅ Title & Text on Top */}
          <h3 className="project-title">Motor Control for Submersible Application - Spring 2023</h3>
          <p className="project-description">
          This research project was part of my undergraduate mechatronics course at Florida State University. In this project the team was responsible for creating a protype of a submersible vehicle to demonstrate sensor integration and remote control. In this project I was responsible for developing the guidance system for the submersible, essentially focusing on the rear half of the vehicle. I developed a tethered motor controller to manually guide the vehicle using two rear motors. This system required designing IP65 proof seals around the output shafts to prevent water ingress.          </p>

          {/* ✅ Larger Carousel Below */}
          <Carousel 
            media={[Submarine1, Submarine2, Submarine3]} 
            altText="HERMES Project"
          />

          <p className="project-description">
          The system was powered by an Arduino Mega 2560 which controlled a PWM bipolar junction transistor system to modulate the power output to each motor. Additionally, I integrated a pressure sensor system to measure the depth of the dive by creating a manometer trapping an air cavity to measure stagnation pressure. The static pressure of the water affects the dynamic pressure of the cavity which I measured the sum of at the pressure sensor diaphragm.           </p>

        </div>
      </div>
    </div>
  );
}

export default Engineering;
