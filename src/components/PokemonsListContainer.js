import React, { useState } from "react";
import { Pagination } from "./Pagination";

import { PokemonCard } from "./PokemonCard";

export const PokemonsListContainer = ({ pokemonsList, filter }) => {
  const filteredPokemons = () => {
    if (filter.search === "") return pokemonsList;
    else {
      return pokemonsList.filter((pokemon) =>
        pokemon.name.includes(filter.search.toLowerCase())
      );
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPokemon = currentPage * postsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - postsPerPage;
  const currentPokemon = filteredPokemons().slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return (
    <>
      <div className="row">
        {currentPokemon.map((pokemon) => {
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
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPokemons().length}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </>
  );
};
