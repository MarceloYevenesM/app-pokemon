import { PokemonsListContainer } from "../components/PokemonsListContainer";
import { Loading } from "../components/Loading";
import { usePokemons } from "../hooks/usePokemons";
import { Search } from "../components/Search";
import { useState } from "react";

export const PokemonsContainer = () => {
  const { isLoading, pokemons } = usePokemons();
  const [filter, setFilter] = useState({
    search: "",
  });

  

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-center">Listade de pokemons</h1>
          <Search setFilter={setFilter} filter />
          <PokemonsListContainer pokemonsList={pokemons} filter={filter} />
        </>
      )}
    </div>
  );
};
