import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { Loading } from "./Loading";
import { ItemPokemonDetails } from "./ItemPokemonDetails";
import { WithoutResults } from "./WithoutResults";

export const PokemonDetailContainer = () => {
  const { id } = useParams();
  const { isLoading, pokemon } = usePokemon(id);

  if (isLoading === true) {
    return <Loading />;
  }

  if (pokemon.length === 0) {
    return (
      <WithoutResults
        text="No hay resultados para este código"
        itHasAStartButton={true}
      />
    );
  }

  return <>{<ItemPokemonDetails pokemon={pokemon} key={id} />}</>;
};
