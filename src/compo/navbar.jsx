import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import logoKasa from "../asset/logoKasa.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logoKasa} alt="logo Kasa" />
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
