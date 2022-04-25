import { PokemonsListContainer } from "../components/PokemonsListContainer";
import { Loading } from "../components/Loading";
import { usePokemons } from "../hooks/usePokemons";
import { Search } from "../components/Search";
import { useState } from "react";
import "../styles/pokemonContainer.css";
import { WithoutResults } from "../components/WithoutResults";

export const PokemonsContainer = () => {
  const { isLoading, pokemons } = usePokemons();
  const [filter, setFilter] = useState({
    search: "",
  });

  if (pokemons.length === 0 && isLoading===false) {
    return (
      <WithoutResults
        text="Ocurrio un error al cargar los datos, intente mas tarde"
        itHasAStartButton={false}
      />
    );
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="row">
            <h1 className="text-center title">Lista de Pokémons</h1>
          </div>
          <div className="container row">
            <Search setFilter={setFilter} filter />
          </div>

          <PokemonsListContainer pokemonsList={pokemons} filter={filter} />
        </>
      )}
    </>
  );
};
