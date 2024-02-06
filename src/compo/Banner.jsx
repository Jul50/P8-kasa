import React from "react";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src="Banner.png" alt="banner img" />
      <h1>
        Chez vous,
        <br className="Break" /> partout et ailleurs
      </h1>
    </div>
  );
}

export default Banner;
