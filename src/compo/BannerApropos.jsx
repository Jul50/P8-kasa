import React from "react";
import "../styles/BannerApropos.css";
import BannerAbout from "../asset/Banner_a_propos.png";

function BannerApropos() {
  return (
    <div>
      <div className="banner">
        <img src={BannerAbout} alt="logo Kasa" />
      </div>
    </div>
  );
}

export default BannerApropos;
