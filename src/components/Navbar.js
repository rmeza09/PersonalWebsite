import React, { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "../styles.css";

function Navbar({ setActiveSection }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header id="navbar">
      {isMobile ? (
        <MobileNavbar setActiveSection={setActiveSection} />
      ) : (
        <DesktopNavbar setActiveSection={setActiveSection} />
      )}
    </header>
  );
}

export default Navbar;
