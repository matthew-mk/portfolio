import React from "react";
import "./Project.css";

const Project = ({
  title,
  technologies,
  description,
  live,
  sourceCode,
  img,
  alt,
}) => {
  return (
    <div className="project">
      <div className="project__text">
        <h1 className="project__title">
          {title}
          <span className="project__title__separator"> | </span>
          <span className="project__technologies">{technologies}</span>
        </h1>
        <p className="project__description">{description}</p>
        <div
          className="project__links"
          style={{ display: !live && !sourceCode && "none" }}
        >
          {live && (
            <a href={live} className="project__link accent">
              View live
            </a>
          )}
          {sourceCode && (
            <a href={sourceCode} className="project__link accent">
              Source code
            </a>
          )}
        </div>
      </div>
      <div className="project__img">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default Project;
