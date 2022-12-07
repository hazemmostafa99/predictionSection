import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="heroLeft">
          <h1>SMART DIAGNOSIS WITH SMART AI</h1>
          <p>
            A WEB APP THAT CAN DIAGNOSE A DISEASE AUTOMATICALLY BASE ON IMAGE
            PROCESSING
          </p>
          <button>Get it now!</button>
        </div>
        <div className="heroRight">
          <img src="assets/Vector HERO.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
