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
        <div className="navbar__txt">Acceuil</div>
      </NavLink>
      <NavLink to="/a_propos">
        <div className="navbar__txt">A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
