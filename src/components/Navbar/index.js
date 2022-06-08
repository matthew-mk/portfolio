import React from "react";
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const socialMediaItems = [
    {
      icon: <FaEnvelope className="nav__icon" />,
      href: "mailto:matthew.m.king@outlook.com",
      newTab: false,
    },
    {
      icon: <FaGithub className="nav__icon" />,
      href: "https://github.com/matthew-mk",
      newTab: true,
    },
    {
      icon: <FaLinkedinIn className="nav__icon" />,
      href: "https://linkedin.com/in/matthew-m-king",
      newTab: true,
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
                  {item.newTab ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav__link"
                    >
                      {item.icon}
                    </a>
                  ) : (
                    <a href={item.href} className="nav__link">
                      {item.icon}
                    </a>
                  )}
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
