import React from "react";
import IMG_7025 from "../assets/IMG_7025.jpeg";
import IMG_1856 from "../assets/IMG_1856.jpg";
import IMG_6784 from "../assets/IMG_6784.jpg";
import OE12922 from "../assets/_OE12922.jpg";
import IMG_3399 from "../assets/IMG_3399.jpg";
import IMG_4667 from "../assets/IMG_4667.jpg";

function Experiences() {
  return (
    <div className="experiences-container">
      <div className="item-container">
        <img src={IMG_7025} alt="IMECE presentation" className="profile-image" />
        <div className="item-text">
          <h2>Portland, Oregon - 2024</h2>
          <p>
          In November 2024, I had the incredible opportunity to attend and present a poster on my research at the ASME International Mechanical Engineering Congress in Portland, Oregon. Over three enriching days, I learned about state-of-the-art research, connected with fellow engineers, and engaged in discussions on the future of fiber optic health monitoring systems for structural state evaluation.          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={IMG_1856} alt="SHPE Convention 2023" className="profile-image" />
        <div className="item-text">
          <h2>Salt Lake City, Utah - 2023</h2>
          <p>
          In November of 2023, I attended the National Society of Hispanic Professional Engineers. I took the opportunity to connect with recruiters and explore different industries. I negotiated funding for myself and four of my friends through my relationship with the head of the mechanical engineering department at FSU. I was able to secure lodging, travel, and food stipends for our group of five. Contingent on representing FSU, our Region 7 SHPE chapter, and expanding our research interests.           </p>
        </div>
      </div>

      <div className="item-container">
        <img src={IMG_6784} alt="Senior Design Award Ceremony" className="profile-image" />
        <div className="item-text">
          <h2>Pasadena, California - 2023</h2>
          <p>
          From June to December of 2023, I contributed to NASA’s Jet Propulsion Laboratory as a robotic hardware engineering intern, where I played a key role in developing a cryogenic dynamometer for extreme environment robotics. My experience spans precision mechanical design, finite element analysis, and systems integration research for robotic applications.          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={OE12922} alt="Senior Design Award Ceremony" className="profile-image" />
        <div className="item-text">
          <h2>Tallahassee, Florida - 2023</h2>
          <p>
          In April of 2023, my team and I concluded our senior design project working with NASA Marshall Space Flight Center (MSFC) to develop HERMES, a heavy lunar transport vehicle prototype. During senior design day we presented our final prototype for judging and were awarded the “Best Presentation in Session D”, for space related projects.          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={IMG_4667} alt="MSFC Visit" className="profile-image" />
        <div className="item-text">
          <h2>Huntsville, Alabama - 2023</h2>
          <p>
          In February of 2023, our capstone senior design team and I traveled to Alabama to visit NASA MSFC where we toured the facility and spoke directly with the senior engineers advising our senior design project. At the time we had a partial prototype we brought to the regolith field at MSFC.          </p>
        </div>
      </div>

      <div className="item-container">
        <img src={IMG_3399} alt="Senior Design Award Ceremony" className="profile-image" />
        <div className="item-text">
          <h2>Collierville, Tennessee - 2022</h2>
          <p>
          From May to August of 2022, I participated in my first internship program with Carrier HVAC as a Quality Engineering Intern. During this process I got the opportunity to work in a manufacturing environment designing tools to improve facility processes. I also took the opportunity to lead a team of 9 PTC workers to burndown a backlog of units with a variety of repair issues to ship to customers by the end of the summer.          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
