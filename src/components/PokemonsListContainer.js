import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { PokemonCard } from "./PokemonCard";
import { WithoutResults } from "./WithoutResults";

export const PokemonsListContainer = ({ pokemonsList, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);



  function sortDescending(propName) {
    return function (item1, item2) {
      if (item1[propName] < item2[propName]) return 1;
      if (item1[propName] > item2[propName]) return -1;
      return 0;
    };
  }

  function sortAscending(propName) {
    return function (item1, item2) {
      if (item1[propName] < item2[propName]) return -1;
      if (item1[propName] > item2[propName]) return 1;
      return 0;
    };
  }

  const filteredPokemons = () => {
    const pokemonFilter = pokemonsList.filter((pokemon) => {
      if (filter.name === "") {
        return pokemon;
      } else {
        return (
          pokemon.name.includes(filter.search.toLowerCase().trim()) ||
          pokemon.id.toString().includes(filter.search.toLowerCase().trim())
        );
      }
    });

    switch (filter.select) {
      case "ascNum":
        return pokemonFilter.sort(sortAscending("id"));
      case "desNum":
        return pokemonFilter.sort(sortDescending("id"));
      case "ascName":
        return pokemonFilter.sort(sortAscending("name"));
      case "desName":
        return pokemonFilter.sort(sortDescending("name"));

      default:
        return pokemonFilter;
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
