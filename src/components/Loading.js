import React from "react";
import loadingPikachu from "../assets/pikachuball.gif";

export const Loading = () => {
  return (
    <div className="d-flex row vh-100 justify-content-center align-items-center">
      <div className="col-auto text-center">
        <img src={loadingPikachu} alt="Cargando" />
        <h2>Cargando contenido...</h2>
      </div>
    </div>
  );
};
