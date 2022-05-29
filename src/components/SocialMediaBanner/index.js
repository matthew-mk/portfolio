import React from "react";
import "./SocialMediaBanner.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaBanner = () => {
  const iconSize = "2rem";
  const socialMediaItems = [
    { icon: <FaEnvelope size={iconSize} />, href: "#" },
    {
      icon: <FaGithub size={iconSize} />,
      href: "https://github.com/matthew-mk",
    },
    {
      icon: <FaLinkedin size={iconSize} />,
      href: "https://linkedin.com/in/matthew-m-king",
    },
  ];

  return (
    <ul className="banner background--primary">
      {socialMediaItems.map((item) => {
        return (
          <li className="banner__item">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="banner__link primary"
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaBanner;
