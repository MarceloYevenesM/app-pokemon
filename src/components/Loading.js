import React from "react";
import loadingPikachu from "../assets/pikachuBall.gif";

export const Loading = () => {
  return (
    <div className="d-flex row justify-content-center align-items-center">
      <div className="col-auto text-center">
        <img src={loadingPikachu} alt="Cargando" className="img-fluid" />
        <h2>Cargando contenido...</h2>
      </div>
    </div>
  );
};
