import React from "react";
import { PokemonCart } from "./PokemonCart";

export const PokemonsListContainer = ({ pokemonsList }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {pokemonsList.map((pokemon) => {
          return (
            <div className="col-md-4" key={pokemon.id}>
              <PokemonCart img={pokemon.img} name={pokemon.name} id={pokemon.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
