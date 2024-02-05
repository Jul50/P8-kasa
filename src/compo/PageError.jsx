import React from "react";
import "../styles/PageError.css";

function PageError() {
  return (
    <div className="pageerreur">
      <h2 className="pageerreur__title">404</h2>
      <p className="pageerreur__txt" Pageerreur__>
        Oups! La page que vous demandez n'existe pas
      </p>
      <a className="pageerreur__back" href="/">
        Retourner sur la page d'accuei
      </a>
    </div>
  );
}

export default PageError;
