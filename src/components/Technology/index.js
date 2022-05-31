import React, { useEffect } from "react";
import "./Technology.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Technology = ({ name, img }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="technology" data-aos="fade-up">
      <img src={img} alt={name} className="technology__img" />
      <p className="technology__name">{name}</p>
    </div>
  );
};

export default Technology;
