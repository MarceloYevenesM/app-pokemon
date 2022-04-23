import React from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonsListContainer = ({ pokemonsList, filter }) => {
  const filteredPokemons = () => {
    if (filter.search === "") return pokemonsList;
    else {
      return pokemonsList.filter((pokemon) =>
        pokemon.name.includes(filter.search)
      );
    }
  };

  return (
    <div className="row">
      {filteredPokemons().map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            img={pokemon.img}
            name={pokemon.name}
            id={pokemon.id}
          />
        );
      })}
    </div>
  );
};
