import React, { useState } from "react";
import "../styles.css";

function MobileNavbar({ setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <div className="mobile-navbar-container">
      <button className="menu-btn" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>

      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleNavClick("resume")}>About Me</button>
        <button onClick={() => handleNavClick("engineering")}>Mechanical Engineering</button>
        <button onClick={() => handleNavClick("contact")}>Contact Me</button>
      </nav>
    </div>
  );
}

export default MobileNavbar;
