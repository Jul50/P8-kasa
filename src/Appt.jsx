import React from "react";
import Navcompo from "./compo/navbar.jsx";
import Footer from "./compo/Footer.jsx";
import Apartmentpage from "./compo/Apartmentpage.jsx";

function Appt() {
  return (
    <div>
      <Navcompo />
      <Apartmentpage />
      <Footer />
    </div>
  );
}

export default Appt;
