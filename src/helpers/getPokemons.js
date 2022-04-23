import { pokemonApi } from "../api/pokemonApi";

export const getPokemoms = async () => {
  const resp = await pokemonApi.get("/pokemon?limit=200");
  return getMoreInformation(resp.data.results);
};

const getMoreInformation = (incompleteDataList) => {
  const pokemonsArray = Promise.all(
    incompleteDataList.map(async (pokemon) => {
      const pokeUrlArray = pokemon.url.split("/");
      const pokemonID = pokeUrlArray[6];

      const resp = await pokemonApi.get(`/pokemon/${pokemonID}/`);

      return {
        id: pokeUrlArray[6],
        name: pokemon.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`,
        base_experience: resp.data.base_experience,
        height: resp.data.height,
      };
    })
  );

  return pokemonsArray;
};
