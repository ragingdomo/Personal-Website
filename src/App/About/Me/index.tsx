import React from "react";
import "./index.css";

function Me() {
  return (
    <div className="me-container">
      <h1>About Me</h1>
      <p className="me-text">
        I'm a recent graduate of Augustana University.
        Although my major and minor were both STEM related, 
        thanks to my liberal arts education, my domain of 
        knowledge spreads far beyond computer science. 
        I studied music, media, business, psychology, 
        literature, history, biology, philosophy, religion, and more.{" "}
      </p>
      <br/>
      <p className="me-text">
        I plan to use my liberal arts background along with my 
        talents in programming and computers to solve problems
        and support communities big and small. I'm excited for
        your community to be the beginning.
      </p>
    </div>
  );
}

export default Me;
