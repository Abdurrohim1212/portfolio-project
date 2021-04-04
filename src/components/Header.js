import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Development and Web Promotion</h1>
        <Typed
          strings={["Web Design", "Web Development"]}
          className="typed-text"
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#contact" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Header;
