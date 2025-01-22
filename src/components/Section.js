import React from "react";

function Section({ id, title, children, isActive }) {
  return (
    <section id={id} className={`content ${isActive ? "active" : "hidden"}`}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Section;
