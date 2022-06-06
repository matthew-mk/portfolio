import React from "react";
import video from "../../assets/videos/hero.mp4";
import "./HeroBackground.css";

const HeroBackground = () => {
  return (
    <video autoPlay loop muted playsInline className="hero__background">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default HeroBackground;
