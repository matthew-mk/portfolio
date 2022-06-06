import React from "react";
import covInfoImage from "../../assets/images/projects/covid.png";
import dataImage from "../../assets/images/projects/data.png";
import surfImage from "../../assets/images/projects/surf.png";
import Project from "../Project";

const Projects = () => {
  const projects = [
    {
      title: "Classification of Surfing Images",
      technologies: "Python, Machine Learning",
      description: `For my fourth-year dissertation project at the University of Strathclyde, I developed an
      object-oriented system that could be used to test whether images of surfing locations could be classified
      based on the quality of the surfing conditions. The system was used to create CNN, SVM, RF, and KNN models
      that could classify images of surfing locations in this manner, and results were gathered on their performances 
      at this task.`,
      live: "",
      sourceCode:
        "https://github.com/matthew-mk/classification-of-surfing-images",
      img: surfImage,
      alt: "a person surfing a wave",
    },
    {
      title: "Police Oversight Internship",
      technologies: "React, Express, Node, SQL",
      description: `In the summer of 2021, I completed an internship with the University of Strathclyde. During 
      the internship, I designed and developed a data visualisation website for an international project 
      on policing oversight. As part of the project, I also conducted a research study with my supervisors 
      to see what stakeholders liked about my website prototype, what they would change, and what could be added.`,
      live: "",
      sourceCode: "",
      img: dataImage,
      alt: "data on a laptop",
    },
    {
      title: "COVInfo",
      technologies: "HTML, CSS, JavaScript",
      description: `During my third year at the University of Strathclyde, I developed a COVID analytics mobile
      app as part of a team. The app contains a number of useful features, including up-to-date local and global
      COVID-19 statistics, recent headlines and government guidelines, a symptoms checker, and a search bar for
      quickly locating information on the app.`,
      live: "",
      sourceCode: "https://github.com/matthew-mk/COVInfo",
      img: covInfoImage,
      alt: "COVInfo mobile app snippets",
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
