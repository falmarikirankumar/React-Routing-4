import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let click = {
    color: "red",
  };
  return (
    <>
      <div className="DivNav">
        <h2>
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? click : undefined)}
          >
            Home
          </NavLink>
        </h2>

        <h2>
          <NavLink
            to={"/students"}
            style={({ isActive }) => (isActive ? click : undefined)}
          >
            Students
          </NavLink>
        </h2>

        <h2>
          <NavLink
            to={"/contactUs"}
            style={({ isActive }) => (isActive ? click : undefined)}
          >
            Contact Us
          </NavLink>
        </h2>
      </div>
    </>
  );
};

export default NavBar;
