import React from "react";
import "./About.css";
import graduationImage from "../../assets/images/graduation.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container section__wrapper">
        <p className="section__topic accent">About me</p>
        <h1 className="section__title">Find out more about who I am 👋</h1>
        <div className="row">
          <div className="about__text">
            <p>
              <span className="emoji">🎓</span> I recently graduated from the
              University of Strathclyde with a BSc (Hons) degree in computer
              science.
            </p>
            <p>
              <span className="emoji">😁</span> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit quam culpa quisquam fugit.
            </p>
            <p>
              <span className="emoji">😎</span> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit quam culpa quisquam fugit.
            </p>
          </div>
          <img
            src={graduationImage}
            alt="people throwing mortarboard hats in the air"
            className="about__img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
