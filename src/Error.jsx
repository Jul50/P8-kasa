import React from "react";
import Navcompo from "./compo/navbar.jsx";
import Footer from "./compo/Footer.jsx";
import PageError from "./compo/PageError.jsx";

function Error() {
  return (
    <div>
      <Navcompo />
      <PageError />
      <Footer />
    </div>
  );
}

export default Error;
