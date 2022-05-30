import React from "react";
import "./Footer.css";
import { Link as LinkS } from "react-scroll";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  const links = [
    { name: "Email", href: "#" },
    { name: "GitHub", href: "https://github.com/matthew-mk" },
    { name: "LinkedIn", href: "https://linkedin.com/in/matthew-m-king" },
    { name: "CV", href: "#" },
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
        {links.map((link) => {
          return (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
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
