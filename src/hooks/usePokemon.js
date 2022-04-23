import { useState, useEffect } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const usePokemon = (pokemonID) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon(pokemonID).then((pokemon) => {
      setTimeout(() => {
        setIsLoading(false);
        setPokemon(pokemon);
      }, 1000);

      setPokemon(pokemon);
    });
  }, [pokemonID]);

  return {
    isLoading,
    pokemon,
  };
};
