import React from "react";
import "./PageError.css";

function PageError() {
  return (
    <div>
      <h2>404</h2>;<p>Oups! La page que vous demandez n'existe pas</p>
      <a href="/">Retourner sur la page d'accuei</a>
    </div>
  );
}

export default PageError;
