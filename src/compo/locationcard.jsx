import "../styles/locationcard.css";
import React from "react";
import { Link } from "react-router-dom";

function Locationcard({ id, imgcover, title }) {
  return (
    <Link to={`/accomodation/${id}`} className="location-card-link">
      <div className="loc">
        <img src={imgcover} alt="Cover Appartement" />
        <div className="loc__txt">{title}</div>
      </div>
    </Link>
  );
}

export default Locationcard;
