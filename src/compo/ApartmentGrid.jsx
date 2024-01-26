import React, { useEffect, useState } from "react";
import "./ApartmentGrid.css";
import Locationcard from "./locationcard.jsx";

function ApartmentGrid() {
  const [dbloc, setapt] = useState([]);
  useEffect(fetchApt, []);

  function fetchApt() {
    fetch("logement.json")
      .then((loc) => loc.json())
      .then((loc) => setapt(loc))
      .catch(console.error);
  }
  // affichage array location //{
  return (
    <div className="apartment">
      {dbloc.map((dbloc) => (
        <Locationcard title={dbloc.title} imgcover={dbloc.cover} />
      ))}
    </div>
  );
}

export default ApartmentGrid;
