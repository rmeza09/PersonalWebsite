import React, { useState } from "react";
import Navbar from "./components/DesktopNavbar";
import Section from "./components/Section";
import Profile from "./components/Profile";
import Engineering from "./components/Engineering";
import Contact from "./components/Contact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles.css";

function App() {
  const [activeSection, setActiveSection] = useState("resume");

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />

      <div id="main-content">
        <Section id="resume" isActive={activeSection === "resume"}>
          <Profile />
        </Section>

        <Section id="engineering" isActive={activeSection === "engineering"}>
          <Engineering />
        </Section>
        {/* Render the profile section 
        <Section id="finance" title="Finance Research" isActive={activeSection === "finance"}>
          <p>This section covers my insights and research into financial topics.</p>
        </Section>
        */}
        <Section id="contact" isActive={activeSection === "contact"}>
          <Contact />
        </Section>
      </div>
    </div>
  );
}

export default App;
