import { useState, useEffect } from "react";
import { getPokemons } from "../helpers/getPokemons";

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((pokemons) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      setPokemons(pokemons);
    });
  }, []);

  return {
    isLoading,
    pokemons,
  };
};
