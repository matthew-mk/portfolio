import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-scroll";
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <div className="container row">
        <Link
          className="logo"
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="mobile__icon">
          <FaBars />
        </div>
        <nav className="nav">
          <ul className="nav__list nav__list--primary">
            <li className="nav__item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav__link"
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav__link"
              >
                Skills
              </Link>
            </li>
            <li
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav__item"
            >
              <Link className="nav__link">Projects</Link>
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
                href="#"
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
