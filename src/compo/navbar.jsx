import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="LOGO.jpg" alt="logo Kasa" />
      </div>
      <div>Acceuil</div>
      <div>A propos</div>
    </nav>
  );
}

export default Navbar;
