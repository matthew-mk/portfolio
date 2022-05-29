import React from "react";
import Technology from "../Technology";
import html from "../../assets/images/technologies/html.png";
import css from "../../assets/images/technologies/css.png";
import javascript from "../../assets/images/technologies/javascript.png";
import react from "../../assets/images/technologies/react.png";
import node from "../../assets/images/technologies/node.png";
import sql from "../../assets/images/technologies/sql.png";
import python from "../../assets/images/technologies/python.png";
import java from "../../assets/images/technologies/java.png";
import "./Skills.css";

const Skills = () => {
  const technologies = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: javascript },
    { name: "React.js", img: react },
    { name: "Node.js", img: node },
    { name: "SQL", img: sql },
    { name: "Python", img: python },
    { name: "Java", img: java },
  ];

  return (
    <section id="skills">
      <div className="container section__wrapper">
        <p className="section__topic accent">Skills</p>
        <h1 className="section__title">View the technologies I use 🖥️</h1>
        <div className="skills__technologies">
          {technologies.map((technology) => {
            return <Technology name={technology.name} img={technology.img} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
