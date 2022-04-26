import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import "../styles/pokemonCard.css";

export const PokemonCard = ({ img, name, id }) => {
  return (
    <div className="col-md-6 col-lg-4" key={id}>
      <div className="card border">
        <div className="img-top"></div>
        <div className="card-img-pokemon">
          <img src={img} alt="a wallpaper" />
        </div>

        <div className="card-body text-center">
          <h4 className="card-title titleCard">
            {id} - {name}
          </h4>

          <Link to={`/pokemon/${id}`}>
            <CustomButton name="Detalles" />
          </Link>
        </div>
      </div>
    </div>
  );
};
