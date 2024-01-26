import React from "react";
import "./Apartmentpage.css";
import Collapsible from "./Collapsible.jsx";

function Apartmentpage() {
  const descriptionequipements = [
    {
      title: "Description",
      content: "ddddddddddddddddd",
    },
    {
      title: "Equipement",
      content: "eeeeeeeeeeeeeeeeeee",
    },
  ];

  return (
    <div className="Apartment">
      <div className="Apartment__img">
        <img src="banner.png" alt="" />
      </div>
      <div className="Apartment__flexbox">
        <div>
          <h4 className="Apartment__title">
            Cozy loft on the Canal Saint-Martin
          </h4>
          <h2 className="Apartment__subtitle">Paris, Ile de France</h2>
          <div className="Apartment__tags">
            <span> Cozy</span>
            <span> Canal</span>
            <span> Paris dix</span>
          </div>
        </div>
        <div className="Apartment__proprio">
          <div className="Apartment__proprio__txt">
            <h3>
              Maxime
              <br />
              123456
            </h3>
            <div className="Apartment__proprio__stars">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
          </div>
          <img
            className="Apartment__proprio__img"
            src="banner.png"
            alt="img proprio"
          />
        </div>
      </div>
      <div className="Apartment__c ollapsible">
        <div className="Apartment__descriptionequipements">
          <Collapsible sections={descriptionequipements} />
        </div>
      </div>
    </div>
  );
}

export default Apartmentpage;
