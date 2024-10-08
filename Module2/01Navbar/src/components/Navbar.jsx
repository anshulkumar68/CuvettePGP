import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <NavLink className="tag" to="/">
          Home
        </NavLink>
        <NavLink className="tag" to="/about">
          About
        </NavLink>
        <NavLink className="tag" to="/demo">
          Demo
        </NavLink>
        <NavLink className="tag" to="/blog">
          Blog
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
