import React from "react";
import "./Technology.css";

const Technology = ({ name, img }) => {
  return (
    <div className="technology">
      <img src={img} alt={name} className="technology__img" />
      <p className="technology__name">{name}</p>
    </div>
  );
};

export default Technology;
