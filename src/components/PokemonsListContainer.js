import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { PokemonCard } from "./PokemonCard";
import { WithoutResults } from "./WithoutResults";

export const PokemonsListContainer = ({ pokemonsList, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const indexOfLastPokemon = currentPage * postsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - postsPerPage;

  const filteredPokemons = () => {
    if (filter.search === "") return pokemonsList;
    else {
      return pokemonsList.filter((pokemon) =>
        pokemon.name.includes(filter.search.toLowerCase())
      );
    }
  };

  if (filteredPokemons().length === 0) {
    return (
      <WithoutResults
        text="No hay resultados para la búsqueda"
        itHasAStartButton={false}
      />
    );
  }

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

      <div className="row justify-content-end">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPokemons().length}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </>
  );
};
