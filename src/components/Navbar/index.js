import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { Link as LinkS } from "react-scroll";
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  const iconSize = "1.5rem";
  const socialMediaItems = [
    { icon: <FaEnvelope size={iconSize} />, href: "#" },
    {
      icon: <FaGithub size={iconSize} />,
      href: "https://github.com/matthew-mk",
    },
    {
      icon: <FaLinkedinIn size={iconSize} />,
      href: "https://linkedin.com/in/matthew-m-king",
    },
  ];

  return (
    <header id="header">
      <div className="container row">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="mobile__icon" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <nav className="nav">
          <ul className="nav__list nav__list--primary">
            <li className="nav__item">
              <LinkS
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav__link"
              >
                About
              </LinkS>
            </li>
            <li className="nav__item">
              <LinkS
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                className="nav__link"
              >
                Skills
              </LinkS>
            </li>
            <li className="nav__item">
              <LinkS
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="nav__link"
              >
                Projects
              </LinkS>
            </li>
          </ul>
          <ul className="nav__list nav__list--secondary">
            {socialMediaItems.map((item, i) => {
              return (
                <li className="nav__item" key={`nav__item-${i}`}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav__link"
                  >
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
