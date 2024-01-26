import "./locationcard.css";
import React from "react";
import { Link } from "react-router-dom";

function Locationcard(props) {
  return (
    <Link to="/appt_page">
      <div className="loc">
        <img src={props.imgcover} alt="Cover Appartement" />
        <div className="loc__txt">{props.title}</div>
      </div>
    </Link>
  );
}

export default Locationcard;
