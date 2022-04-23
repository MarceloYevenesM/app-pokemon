import { pokemonApi } from "../api/pokemonApi";

export const getPokemon = async (pokemonID) => {
  try {
    const resp = await pokemonApi.get(`/pokemon/${pokemonID}/`);
    return resp.data;
  } catch (error) {
    return [];
  }
};
