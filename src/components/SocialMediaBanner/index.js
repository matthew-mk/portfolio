import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./SocialMediaBanner.css";

const SocialMediaBanner = () => {
  const socialMediaItems = [
    {
      icon: <FaEnvelope className="banner__icon" />,
      href: "mailto:matthew.m.king@outlook.com",
      newTab: false,
    },
    {
      icon: <FaGithub className="banner__icon" />,
      href: "https://github.com/matthew-mk",
      newTab: true,
    },
    {
      icon: <FaLinkedin className="banner__icon" />,
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
            target={item.newTab ? "_blank" : undefined}
            rel={item.newTab ? "noopener noreferrer" : undefined}
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
