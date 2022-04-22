import { PokemonsListContainer } from "../components/PokemonsListContainer";
import { Loading } from "../components/Loading";
import { usePokemons } from "../hooks/usePokemons";

export const PokemonsContainer = () => {
  const { isLoading, pokemons } = usePokemons();

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <h1 className="text-center">Listade de pokemons</h1>
      <PokemonsListContainer pokemonsList={pokemons} />
    </>
  );
};
