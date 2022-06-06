import React from "react";
import { Link as LinkS } from "react-scroll";
import logo from "../../assets/images/logo.svg";
import "./Footer.css";

const Footer = () => {
  const links = [
    { name: "Email", href: "mailto:matthew.m.king@outlook.com", newTab: false },
    { name: "GitHub", href: "https://github.com/matthew-mk", newTab: true },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/matthew-m-king",
      newTab: true,
    },
    // { name: "CV", href: "#" },
  ];

  return (
    <footer className="background--primary">
      <LinkS
        to="header"
        spy={true}
        smooth={true}
        offset={-1}
        duration={1500}
        className="footer__logo"
      >
        <img src={logo} alt="logo" />
      </LinkS>
      <div className="footer__links">
        {links.map((link, i) => {
          return (
            <a
              href={link.href}
              target={link.newTab && "_blank"}
              rel={link.newTab && "noopener noreferrer"}
              className="footer__link"
              key={`footer__link-${i}`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
      <small className="footer__copyright">&copy; 2022 Matthew King</small>
    </footer>
  );
};

export default Footer;
