import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="index.html">
          <div id="logo">a.stewart</div>
        </a>
        <div id="menu">
          <a class="menu-item" href="index.html">
            Work
          </a>
          <a class="menu-item" id="here" href="about.html">
            About
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
