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
        <NavLink className="tag" to="/counter">
          Counter
        </NavLink>
        <NavLink className="tag" to="/bg">
          Change BG
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
