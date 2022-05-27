import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Nav;
