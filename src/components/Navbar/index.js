import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { Link as LinkS } from "react-scroll";
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header>
      <div className="container row">
        <LinkS
          className="logo"
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={logo} alt="logo" />
        </LinkS>
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
                duration={500}
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
                duration={500}
                className="nav__link"
              >
                Projects
              </LinkS>
            </li>
          </ul>
          <ul className="nav__list nav__list--secondary">
            <li className="nav__item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link"
              >
                <FaEnvelope size="1.5rem" />
              </a>
            </li>
            <li className="nav__item">
              <a
                href="https://github.com/matthew-mk"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link"
              >
                <FaGithub size="1.5rem" />
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link"
              >
                <FaLinkedinIn size="1.5rem" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
