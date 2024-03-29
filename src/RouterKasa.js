import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Apropos from "./A_propos";
import Error from "./Error";
import Accomodation from "./Accomodation";
import Banner from "./compo/Banner.jsx";
import ApartmentGrid from "./compo/ApartmentGrid.jsx";
import Footer from "./compo/Footer.jsx";
import Navcompo from "./compo/navbar.jsx";

function RouterKasa() {
  return (
    <Router>
      <Navcompo />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* faire un composant Home*/}
              <Banner /> <ApartmentGrid />
            </div>
          }
        />
        <Route path="/A_propos" element={<Apropos />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RouterKasa;
