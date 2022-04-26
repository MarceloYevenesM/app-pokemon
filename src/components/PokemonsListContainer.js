import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { PokemonCard } from "./PokemonCard";
import { WithoutResults } from "./WithoutResults";

export const PokemonsListContainer = ({ pokemonsList, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPokemons = () => {
    if (filter.search === "") return pokemonsList;
    else {
      return pokemonsList.filter(
        (pokemon) =>
          pokemon.name.includes(filter.search.toLowerCase().trim()) ||
          pokemon.id.includes(filter.search.toLowerCase().trim())
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

  const pokemonsPerPage = 12;
  let indexOfLastPokemon;
  let indexOfFirstPokemon;

  if (filter.search.length === 0) {
    indexOfLastPokemon = currentPage * pokemonsPerPage;
    indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  } else {
    indexOfLastPokemon = 1 * pokemonsPerPage;
    indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  }

  const currentPokemons = filteredPokemons().slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return (
    <>
      <div className="row">
        {currentPokemons.map((pokemon) => {
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
          pokemonsPerPage={pokemonsPerPage}
          totalPokemons={filteredPokemons().length}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </>
  );
};
