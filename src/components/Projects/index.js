import React from "react";
import Project from "../Project";
import testImage from "../../assets/images/graduation.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Classification of Surfing Images",
      technologies: "Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
        "nisi ut aliquip ex ea commodo consequat.",
      live: "#",
      sourceCode: "#",
      img: testImage,
      alt: "",
    },
    {
      title: "COVInfo",
      technologies: "HTML, CSS, JavaScript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
        "nisi ut aliquip ex ea commodo consequat.",
      live: "",
      sourceCode: "",
      img: testImage,
      alt: "",
    },
  ];

  return (
    <div id="projects">
      <div className="container section__wrapper">
        <p className="section__topic accent">Projects</p>
        <h1 className="section__title">
          Explore some of the projects I&#39;ve worked on ✍️
        </h1>
        <div>
          {projects.map((project, i) => {
            return (
              <Project
                title={project.title}
                technologies={project.technologies}
                description={project.description}
                live={project.live}
                sourceCode={project.sourceCode}
                img={project.img}
                alt={project.alt}
                key={`project-${i}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
