import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="main">
      <div className="hero container">
        <div className="header-text">
          <h6>Welcome To Cyborg</h6>
          <h4>
            <em>Browse</em> Our Popular Games Here
          </h4>
          <div className="main-button">
            <a href="browse.html">Browse Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
