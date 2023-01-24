import React from "react";
import "./index.css";

function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h1>Skills</h1>
      <div className="skills">
        <div className="skill-category" id="front-end">
          <h2>Front End</h2>
          <p className="skill">
            React, JavaScript, TypeScript, HTML, CSS, Bootstrap
          </p>
        </div>
        <div className="skill-category" id="tools">
          <h2>Tools</h2>
          <p className="skill">Vite, Git, Agile, EmailJS</p>
        </div>
        <div className="skill-category" id="backend">
          <h2>Back End</h2>
          <p className="skill">
            AWS, Firebase, MongoDB, Express, Node, RESTful API
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
