import React from "react";
import "./index.css";
import Me from "./Me";
import Objective from "./Objective";

function About() {
  return (
    <div className="about-container" id="about">
      <Me />
      <Objective />
    </div>
  );
}

export default About;
