import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="container">
      <h1 className="hero__title">
        Hey, <br /> I'm Matthew.
      </h1>
      <p className="hero__text">
        I'm a{" "}
        <span className="hero__text--bold">frontend software engineer</span>
      </p>
    </section>
  );
};

export default Hero;
