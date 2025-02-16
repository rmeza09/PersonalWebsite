import React, { useState } from "react";
import "../styles.css";

function Navbar({ setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section); // Update the active section
    setMenuOpen(false); // Close the menu after clicking
  };

  return (
    <header id="navbar" className={menuOpen ? "open" : ""}>
      {/* Hamburger Menu */}
      <button className="menu-btn" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleNavClick("resume")}>About Me</button>
        <button onClick={() => handleNavClick("engineering")}>
          Mechanical Engineering
        </button>
        <button onClick={() => handleNavClick("contact")}>Contact Me</button>
      </nav>
    </header>
  );
}

export default Navbar;
