import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemPokemon = (pokemon) => {
  const { id, name, base_experience, height, weight, sprites, stats, types } =
    pokemon.pokemon;

  return (
    <div className="d-flex row vh-100 justify-content-center align-items-center">
      <div className="col-auto text-center">
        <div className="card">
          <Card.Header>Nº{id}</Card.Header>
          <Card.Img
            variant="top"
            src={sprites.front_default}
            style={{ width: "18rem" }}
          />
          <div className="card-body text-center">
            <h4 className="card-title"></h4>
            <h4 className="card-title">{name}</h4>

            <Link to={`/`} className="link">
              <Button variant="primary">Volver</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
