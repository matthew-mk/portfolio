import React from "react";
import "./SocialMediaBanner.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaBanner = () => {
  const iconSize = "1.75rem";
  const socialMediaItems = [
    {
      icon: <FaEnvelope size={iconSize} />,
      href: "mailto:matthew.m.king@outlook.com",
      newTab: false,
    },
    {
      icon: <FaGithub size={iconSize} />,
      href: "https://github.com/matthew-mk",
      newTab: true,
    },
    {
      icon: <FaLinkedin size={iconSize} />,
      href: "https://linkedin.com/in/matthew-m-king",
      newTab: true,
    },
  ];

  return (
    <div className="banner background--primary">
      {socialMediaItems.map((item, i) => {
        return (
          <a
            href={item.href}
            target={item.newTab && "_blank"}
            rel={item.newTab && "noopener noreferrer"}
            className="banner__item primary"
            key={`banner__item-${i}`}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaBanner;
