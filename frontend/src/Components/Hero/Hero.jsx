import React from "react";
import "./Hero.css";
import hero_image from "../Assets/images/hero_image.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="img-container">
        <img src={hero_image} alt="" />
        <div className="shade"></div>
      </div>

      <div className="texts">
        <h2>RUHUNU BAGS CENTER</h2>
        <p>
          The Leading bags sellers in Gampaha,Sri Lanka.
          <br />
          We are providing customer satisfied service all over the country.
          <br />
          <br />
          <span>TRUST | LOW PRICE | CUSTOMER FRIENDLY</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
