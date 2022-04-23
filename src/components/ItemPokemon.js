import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemPokemon = (pokemon) => {
  return (
    <div className="d-flex row vh-100 justify-content-center align-items-center">
      <div className="col-auto text-center">
        <div className="card">
          <div className="img-top"></div>
          <div className="card-img-pokemon"></div>

          <div className="card-body text-center">
            <h4 className="card-title"></h4>

            <Link to={`/`} className="link">
              <Button variant="primary">Volver</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
