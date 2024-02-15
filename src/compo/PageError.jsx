import React from "react";
import "../styles/PageError.css";

function PageError() {
  return (
    <div className="PageError">
      <h2 className="PageError__title">404</h2>
      <p className="PageError__txt">
        Oups! La page que vous demandez n'existe pas
      </p>
      <a className="PageError__back" href="/">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
}

export default PageError;
