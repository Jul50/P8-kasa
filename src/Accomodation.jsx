import React from "react";
import Navcompo from "./compo/navbar.jsx";
import Footer from "./compo/Footer.jsx";
import Apartmentpage from "./compo/Apartmentpage.jsx";
import { useParams } from "react-router-dom";

function Accomodation() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Apartmentpage id={id} />
    </div>
  );
}

export default Accomodation;
