import React from "react";
import "./index.css";

function Intro() {
  return (
    <div className="intro-container">
      <h1 id="name">Jonas Kulzer</h1>
      <h2>Full Stack Developer</h2>
      <a className="nav-buttons" href="#skills">
        Skills
      </a>
      <a className="nav-buttons" href="#projects">
        Projects
      </a>
      <a className="nav-buttons" href="#about">
        About Me
      </a>
      <a className="nav-buttons" href="#contact">
        Contact
      </a>
    </div>
  );
}

export default Intro;
