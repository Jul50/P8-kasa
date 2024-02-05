import React from "react";
import Locationcard from "./locationcard";
import logements from "../data/data.json";
import "../styles/ApartmentGrid.css";

function ApartmentGrid() {
  return (
    <div className="home_gallery">
      {logements.map((logement) => (
        <article key={logement.id}>
          <Locationcard
            id={logement.id}
            imgcover={logement.cover}
            title={logement.title}
          />
        </article>
      ))}
    </div>
  );
}

export default ApartmentGrid;
