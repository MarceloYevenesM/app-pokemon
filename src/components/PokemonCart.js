import React from "react";

export const PokemonCart = ({ img, name, id }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={img} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">
          {id} - {name}
        </h4>
      </div>
    </div>
  );
};
