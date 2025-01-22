import React from "react";
import IMG_7074 from "../assets/IMG_7074.jpg";
import FSULogo from "../assets/FSUSig_Horizontal_Color.png";
import UMDLogo from "../assets/UMD_ENG_Left_Color_web.png";
import Experiences from "./Experiences"; // Import new component

function Profile() {
  return (
    <div>
      <div className="item-container">
        <img src={IMG_7074} alt="Profile Picture" className="profile-image" />
        <div className="profile-text">
          <h2>About Me</h2>
          <p>
            Hi, my name is Rafael Santiago Meza, and I am a mechanical engineer with a strong background in sensor technology, aerospace applications, and numerical analysis.
          </p>
          <p>
            I am currently pursuing a Master of Science in Mechanical Engineering at the University of Maryland (UMD), College Park.
          </p>
          <p>Welcome to my portfolio! Here, you can learn about my journey and projects.</p>
        </div>
      </div>

      <div className="images-container">
        <img src={FSULogo} alt="Florida State University" className="uni-image" />
        <img src={UMDLogo} alt="University of Maryland" className="uni-image" />
      </div>

      {/* Add Experiences Component */}
      <Experiences />
    </div>
  );
}

export default Profile;

