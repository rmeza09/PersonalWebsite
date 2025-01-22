import React from "react";
import profileImage from "../assets/IMG_7074.jpg";

function Profile() {
  return (
    <div className="item-container">
      <img src= {profileImage} alt="Profile Picture" className="profile-image" />
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
  );
}

export default Profile;
