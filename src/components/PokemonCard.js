import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/pokemonCard.css";

export const PokemonCard = ({ img, name, id }) => {
  return (
    <div className="col-md-6 col-lg-4" key={id}>
      <div className="card">
        <div className="img-top"></div>
        <div className="card-img-pokemon">
          <img src={img} alt="a wallpaper" />
        </div>

        <div className="card-body text-center">
          <h4 className="card-title">
            {id} - {name}
          </h4>

          <Link to={`/pokemon/${id}`} className="link">
            <Button variant="primary">Detalles</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
