import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="LOGO.jpg" alt="logo Kasa" />
      </div>
      <NavLink to="/">
        <span>Acceuil</span>
      </NavLink>
      <NavLink to="/a_propos">
        <span>A propos</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
