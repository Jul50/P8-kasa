import React, { useState } from "react";
import "./Collapsible.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapsible() {
  const [openSection, setOpenSection] = useState(null);

  const handleCollapsibleClick = (index) => {
    setOpenSection((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="collapsible__container">
      <button
        className={`collapsible ${openSection === 0 ? "active" : ""}`}
        onClick={() => handleCollapsibleClick(0)}
      >
        Fiabilité
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <div className={`content ${openSection === 0 ? "open" : ""}`}>
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
      <button
        className={`collapsible ${openSection === 1 ? "active" : ""}`}
        onClick={() => handleCollapsibleClick(1)}
      >
        Respect
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div className={`content ${openSection === 1 ? "open" : ""}`}>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
      <button
        className={`collapsible ${openSection === 2 ? "active" : ""}`}
        onClick={() => handleCollapsibleClick(2)}
      >
        Service
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div className={`content ${openSection === 2 ? "open" : ""}`}>
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </div>
      <button
        className={`collapsible ${openSection === 3 ? "active" : ""}`}
        onClick={() => handleCollapsibleClick(3)}
      >
        Sécurité
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div className={`content ${openSection === 3 ? "open" : ""}`}>
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </div>
    </div>
  );
}

export default Collapsible;
