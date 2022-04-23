import React from "react";
import "../styles/pokemonCard.css";

export const PokemonCard = ({ img, name, id }) => {
  return (
    <div className="col-md-4" key={id}>
      <div className="card">
        <div className="img-top"></div>
        <div className="card-img-pokemon">
          <img src={img} alt="a wallpaper" />
        </div>

        <div className="card-body text-center">
          <h4 className="card-title">
            {id} - {name}
          </h4>

          <a href="#!" className="btn btn-outline-secondary" target="_blank">
            Detalles
          </a>
        </div>
      </div>
    </div>
  );
};
