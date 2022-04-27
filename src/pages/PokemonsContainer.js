import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import { PokemonsListContainer } from "../components/PokemonsListContainer";
import { Loading } from "../components/Loading";
import { Search } from "../components/Search";
import { WithoutResults } from "../components/WithoutResults";
import { SelectFilters } from "../components/SelectFilters";
import "../styles/pokemonContainer.css";

export const PokemonsContainer = () => {
  const [filter, setFilter] = useState({
    search: "",
    select: "",
  });
  const { isLoading, pokemons } = usePokemons();

  if (pokemons.length === 0 && isLoading === false) {
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
            <h1 className="text-center title">
              ¡Vamos a conseguir Pokémon! <br /> ¡Atrápalos ya!
            </h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              <Search setFilter={setFilter} filter={{ ...filter }} />
            </div>
            <div className="col-12 col-md-4">
              <SelectFilters setFilter={setFilter} filter={{ ...filter }} />
            </div>
          </div>
          <PokemonsListContainer
            pokemonsList={pokemons}
            filter={{ ...filter }}
          />
        </>
      )}
    </>
  );
};
