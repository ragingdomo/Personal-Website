import React from "react";
import Intro from "../Intro";
import Banner from "../Banner";
import Counter from "../Counter";
import "./index.css";

function Header() {
  return (
    <div className="header">
      <Banner />
      <Intro />
      <Counter />
    </div>
  );
}

export default Header;
