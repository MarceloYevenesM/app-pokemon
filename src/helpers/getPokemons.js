import { pokemonApi } from "../api/pokemonApi";

export const getPokemoms = async () => {
  const resp = await pokemonApi.get("/pokemon?limit=1000");
  return getMoreInformation(resp.data.results);
};

const getMoreInformation = (incompleteDataList) => {
  const pokemonsArray = incompleteDataList.map((pokemon) => {
    const pokeUrlArray = pokemon.url.split("/");

    return {
      id: pokeUrlArray[6],
      name: pokemon.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeUrlArray[6]}.png`,
    };
  });
  
  return pokemonsArray;
};
