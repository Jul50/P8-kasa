import React from "react";
import Navcompo from "./compo/navbar.jsx";
import Footer from "./compo/Footer.jsx";
import BannerApropos from "./compo/BannerApropos.jsx";
import Collapsible from "./compo/Collapsible.jsx";

function A_propos() {
  return (
    <div>
      <Navcompo />
      <BannerApropos />
      <Collapsible />
      <Footer />
    </div>
  );
}

export default A_propos;
