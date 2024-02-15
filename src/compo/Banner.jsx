import React from "react";
import "../styles/Banner.css";
import BannerImg from "../asset/Banner.png";

function Banner() {
  return (
    <div className="banner">
      <img src={BannerImg} alt="banner img" />
      <h1>
        Chez vous,
        <br className="Break" /> partout et ailleurs
      </h1>
    </div>
  );
}

export default Banner;
