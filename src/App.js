import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Profile from "./components/Profile";
import "./styles.css";
import NASALogo from "./assets/NASA-Logo.svg.png";
import JPLLogo from "./assets/Jet_Propulsion_Laboratory_logo.svg.png";
import AFOSRLogo from "./assets/AFOSR+Logo.png";


function App() {
  const [activeSection, setActiveSection] = useState("resume");

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />

      <div id="main-content">
        <Section id="resume" title="About Me" isActive={activeSection === "resume"}>
          <Profile />
        </Section>

        <Section id="engineering" title="Mechanical Engineering" isActive={activeSection === "engineering"}>
          <p>Learn about my background, my journey as an engineer, and my interests.</p>
          
          <div className="images-container">
            <img src={NASALogo} alt="NASA" className="company-image" />
            <img src={JPLLogo} alt="JPL" className="company-image" />
            <img src={AFOSRLogo} alt="AFOSR" className="company-image" />
          </div>

          <div className="engineering-details">
            <h3>My Engineering Experience</h3>
            <p>I have worked on various projects involving sensor technology, fluid dynamics, and aerospace engineering.</p>
            <ul>
              <li>🚀 Developed hypersonic flow models</li>
              <li>🛰️ Designed sensor integration for structural monitoring</li>
              <li>🔬 Conducted research on fluid-structure interactions</li>
            </ul>
          </div>
        </Section>


        <Section id="finance" title="Finance Research" isActive={activeSection === "finance"}>
          <p>This section covers my insights and research into financial topics.</p>
        </Section>

        <Section id="contact" title="Contact Me" isActive={activeSection === "contact"}>
          <p>Get in touch with me for collaboration or more information.</p>
          <p>Email: rmeza@umd.edu</p>
          <p>Phone: (786)-473-5564</p>
        </Section>
      </div>
    </div>
  );
}

export default App;
