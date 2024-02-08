import React from "react";
import "../styles/Apartmentpage.css";
import Error from "../Error";
import Slider from "../compo/slider";
import Collapsible from "./Collapsible";
import Rating from "../compo/Rating";
import Data from "../data/data.json";

function Apartmentpage({ id }) {
  const logement = Data.find((location) => location.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <>
      {logement.pictures && <Slider images={logement.pictures} />}

      <section className="Conteneur_Info">
        <div className="Contteneur_InfoLogement">
          <p className="Tittle">{logement.title}</p>
          <p className="Text">{logement.location}</p>
          <ul className="TagUl">
            {logement.tags.map((tag) => (
              <li className="TagLi" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="Conteneur_InfoOwner">
          <div className="Flexbox">
            <p className="TextOwner">{logement.host.name}</p>
            <img
              className="ImgOwner"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <Rating rating={logement.rating} />
        </div>
      </section>
      <div className="collapsible__container__wrapper">
        <Collapsible title="Description" content={logement.description} />
        <Collapsible
          title="Equipements"
          content={logement.equipments.map((equipment) => (
            <p className="TextCollapse" key={equipment}>
              {equipment}
            </p>
          ))}
        />
      </div>
    </>
  );
}

export default Apartmentpage;
