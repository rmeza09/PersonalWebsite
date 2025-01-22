import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Profile from "./components/Profile";
import "./styles.css";

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
            <img src="assets/NASA-Logo.svg.png" alt="Company 1" className="company-image" />
            <img src="assets/Jet_Propulsion_Laboratory_logo.svg.png" alt="Company 3" className="company-image" />
            <img src="assets/AFOSR+Logo.png" alt="Company 4" className="company-image" />
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
