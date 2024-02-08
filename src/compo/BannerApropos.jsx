import React from "react";
import "../styles/BannerApropos.css";
import bannerAbout from "../asset/Banner_a_propos.png";

function BannerApropos() {
  return (
    <div>
      <div className="banner">
        <img src={bannerAbout} alt="logo Kasa" />
      </div>
    </div>
  );
}

export default BannerApropos;
