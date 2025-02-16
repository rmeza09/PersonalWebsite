import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Profile from "./components/Profile";
import Engineering from "./components/Engineering";
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

        <Section id="finance" title="Finance Research" isActive={activeSection === "finance"}>
          <p>This section covers my insights and research into financial topics.</p>
        </Section>

        <Section id="contact" title="Contact Me" isActive={activeSection === "contact"}>
          <p>Email: rmeza@umd.edu</p>
          <p>Phone: (786)-473-5564</p>
        </Section>
      </div>
    </div>
  );
}

export default App;
