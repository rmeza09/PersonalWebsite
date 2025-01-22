import React from "react";
import IMG_7025 from "../assets/IMG_7025.jpeg";
import IMG_1856 from "../assets/IMG_1856.jpg";
import IMG_6784 from "../assets/IMG_6784.jpg";
import OE12922 from "../assets/_OE12922.jpg";
import IMG_3399 from "../assets/IMG_3399.jpg";

function Experiences() {
  return (
    <div>
      <div className="item-container">
        <img src={IMG_7025} alt="IMECE presentation" className="profile-image" />
        <div className="item-text">
          <h2>Portland, Oregon - 2024</h2>
          <p>
            In November 2024, I had the incredible opportunity to attend and present a poster on my research at the ASME International Mechanical Engineering Congress in Portland, Oregon. Over three enriching days, I learned about state-of-the-art research, connected with fellow engineers, and engaged in discussions on the future of fiber optic health monitoring systems for structural state evaluation.
          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={IMG_1856} alt="SHPE Convention 2023" className="profile-image" />
        <div className="item-text">
          <h2>Salt Lake City, Utah - 2023</h2>
          <p>
            Attended and presented research at the SHPE Convention, connecting with professionals and discussing advancements in engineering.
          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={IMG_6784} alt="Senior Design Award Ceremony" className="profile-image" />
        <div className="item-text">
          <h2>Pasadena, California - 2023</h2>
          <p>
            Presented at the Senior Design Award Ceremony, showcasing a mechanical engineering capstone project.
          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={OE12922} alt="Senior Design Award Ceremony" className="profile-image" />
        <div className="item-text">
          <h2>Tallahassee, Florida - 2023</h2>
          <p>
            Another major event in my engineering career, discussing sensor technology applications.
          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={IMG_3399} alt="Senior Design Award Ceremony" className="profile-image" />
        <div className="item-text">
          <h2>Collierville, Tennessee - 2022</h2>
          <p>
            One of my early research experiences in mechanical engineering and data analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
