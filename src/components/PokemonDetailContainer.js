import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { Loading } from "../components/Loading";
import { ItemPokemon } from "./ItemPokemon";
import { WithoutResults } from "./WithoutResults";

export const PokemonDetailContainer = () => {
  const { id } = useParams();
  const { isLoading, pokemon } = usePokemon(id);

  if (isLoading === true) {
    return <Loading />;
  }

  if (pokemon.length === 0) {
    return <WithoutResults text="No hay resultados para este código" itHasAStartButton={true} />;
  }

  return <>{<ItemPokemon pokemon={pokemon} />}</>;
};
