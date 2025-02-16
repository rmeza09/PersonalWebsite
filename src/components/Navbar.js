import React from "react";

function Navbar({ setActiveSection }) {
  return (
    <header id="navbar">
      <nav>
        <button onClick={() => setActiveSection("resume")}>About Me</button>
        <button onClick={() => setActiveSection("engineering")}>Mechanical Engineering</button>
        {/*<button onClick={() => setActiveSection("finance")}>Finance Research</button>*/}
        <button onClick={() => setActiveSection("contact")}>Contact Me</button>
      </nav>
    </header>
  );
}

export default Navbar;
