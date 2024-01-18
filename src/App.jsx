import React from "react";
import Navcompo from "./compo/navbar.jsx";
import "./App.css";
import Banner from "./compo/Banner.jsx";
import ApartmentGrid from "./compo/ApartmentGrid.jsx";
import Footer from "./compo/Footer.jsx";

function App() {
  return (
    <div>
      <Navcompo />
      <Banner />
      <ApartmentGrid />
      <Footer />
    </div>
  );
}

export default App;
