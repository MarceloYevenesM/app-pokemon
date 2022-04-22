import React from "react";
import loadingPikachu from "../assets/pikachuball.gif";

export const Loading = () => {
  return <>
    <img src={loadingPikachu} alt="Cargando" />
    <h2>Cargando contenido...</h2>
  </>;
};
