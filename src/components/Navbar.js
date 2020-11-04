import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <div id="logo">a.stewart</div>
      </NavLink>

      <div id="menu">
        <NavLink className="menu-item" to="/">
          Work
        </NavLink>
        <NavLink className="menu-item" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
