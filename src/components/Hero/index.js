import React from "react";
import { Link as LinkS } from "react-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="container">
      <h1 className="hero__title">
        Hey,{" "}
        <span className="hero__title--break">
          <br />
        </span>
        I'm Matthew.
      </h1>
      <p className="hero__text">
        I'm a <span className="hero__text--semibold">software engineer</span>
      </p>
      <LinkS
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="hero__btn"
      >
        Learn More <span>&rarr;</span>
      </LinkS>
    </section>
  );
};

export default Hero;
