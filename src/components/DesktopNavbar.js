import React from "react";
import "../styles.css";

function DesktopNavbar({ setActiveSection }) {
  return (
    <nav className="desktop-nav">
      <button onClick={() => setActiveSection("resume")}>About Me</button>
      <button onClick={() => setActiveSection("engineering")}>Engineering Projects</button>
      {/*<button onClick={() => setActiveSection("finance")}>Finance</button>*/}
      <button onClick={() => setActiveSection("contact")}>Contact Me</button>
    </nav>
  );
}

export default DesktopNavbar;
