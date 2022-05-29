import React from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed"}
    >
      <div onClick={toggleSidebar} className="close-icon">
        <FaTimes />
      </div>
      <div>
        <ul className="sidebar__menu">
          <LinkS
            to="about"
            offset={0}
            onClick={toggleSidebar}
            className="sidebar__link"
          >
            About 👋
          </LinkS>
          <LinkS
            to="skills"
            offset={0}
            onClick={toggleSidebar}
            className="sidebar__link"
          >
            Skills 🖥
          </LinkS>
          <LinkS
            to="projects"
            offset={0}
            onClick={toggleSidebar}
            className="sidebar__link"
          >
            Projects ✍
          </LinkS>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
