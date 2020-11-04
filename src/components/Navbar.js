import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/work">
        <div id="logo">a.stewart</div>
      </NavLink>

      <div id="menu">
        <NavLink class="menu-item" id="here" to="/">
          Work
        </NavLink>
        <NavLink class="menu-item" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
