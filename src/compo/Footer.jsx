import React from "react";
import "../styles/Footer.css";
import FooterLogo from "../asset/footerlogo.jpg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__logo">
        <img src={FooterLogo} alt="logo du footer"></img>
      </div>
      <div className="Footer__txt">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
