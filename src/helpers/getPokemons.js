import { pokemonApi } from "../api/pokemonApi";

export const getPokemons = async () => {
  const resp = await pokemonApi.get("/pokemon?limit=169");
  return getMoreInformation(resp.data.results);
};

const getMoreInformation = (incompleteDataList) => {
  const pokemonsArray = incompleteDataList.map((pokemon) => {
    const pokeUrlArray = pokemon.url.split("/");
    const pokemonID = pokeUrlArray[6];

    return {
      id: pokeUrlArray[6],
      name: pokemon.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`,
    };
  });

  return pokemonsArray;
};
