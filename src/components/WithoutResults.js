import React from "react";
import snorlax from "../assets/snorlax.gif";
import { Button } from "./Button";

export const WithoutResults = ({ text, itHasAStartButton }) => {
  return (
    <div className="d-flex row justify-content-center align-items-center">
      <div className="col-auto text-center">
        <img src={snorlax} alt="Cargando" className="fluid" />
        <h2>{text}</h2>
        {itHasAStartButton && (
          <Button bsPrefix="details">Volver al inicio</Button>
        )}
      </div>
    </div>
  );
};
