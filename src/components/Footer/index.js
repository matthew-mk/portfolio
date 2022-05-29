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
    <footer id="footer" className="background--primary">
      <LinkS
        to="#"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        className="footer__logo"
      >
        <img src={logo} alt="logo" />
      </LinkS>
      <div className="footer__links">
        {links.map((link) => {
          return (
            <a href={link.href} className="footer__link">
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
