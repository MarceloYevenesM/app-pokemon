import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { Loading } from "../components/Loading";
import { ItemPokemon } from "./ItemPokemon";

export const PokemonDetailContainer = () => {
  const { id } = useParams();
  const { isLoading, pokemon } = usePokemon(id);

  return <>{isLoading ? <Loading /> : <ItemPokemon pokemon={pokemon} />}</>;
};
