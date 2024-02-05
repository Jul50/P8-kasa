import React from "react";
import Navcompo from "./compo/navbar.jsx";
import Footer from "./compo/Footer.jsx";
import BannerApropos from "./compo/BannerApropos.jsx";
import Collapsible from "./compo/Collapsible.jsx";

function A_propos() {
  const sections = {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes",
  };

  const sections1 = {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  };

  const sections2 = {
    title: "Service",
    content:
      "Nos équipes se  tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  };

  const sections3 = {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  return (
    <div>
      <BannerApropos />
      <Collapsible {...sections} />
      <Collapsible {...sections1} />
      <Collapsible {...sections2} />
      <Collapsible {...sections3} />
    </div>
  );
}

export default A_propos;
