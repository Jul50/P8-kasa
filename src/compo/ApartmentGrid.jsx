import React from "react";
import LocationCard from "./LocationCard";
import Logements from "../data/data.json";
import "../styles/ApartmentGrid.css";

function ApartmentGrid() {
  return (
    <div className="HomeGallery">
      {Logements.map((logement) => (
        <article key={logement.id}>
          <LocationCard
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
