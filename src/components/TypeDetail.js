import React from "react";

import bug from "../assets/typePokemon/bug.png";
import dark from "../assets/typePokemon/dark.png";
import dragon from "../assets/typePokemon/dragon.png";
import electric from "../assets/typePokemon/electric.png";
import fairy from "../assets/typePokemon/fairy.png";
import fighting from "../assets/typePokemon/fighting.png";
import fire from "../assets/typePokemon/fire.png";
import flying from "../assets/typePokemon/flying.png";
import ghost from "../assets/typePokemon/ghost.png";
import grass from "../assets/typePokemon/grass.png";
import ground from "../assets/typePokemon/ground.png";
import ice from "../assets/typePokemon/ice.png";
import normal from "../assets/typePokemon/normal.png";
import poison from "../assets/typePokemon/poison.png";
import psychic from "../assets/typePokemon/psychic.png";
import rock from "../assets/typePokemon/rock.png";
import steel from "../assets/typePokemon/steel.png";
import water from "../assets/typePokemon/water.png";

const typePicture = [
  {
    id: 1,
    type: "bug",
    img: bug,
  },
  {
    id: 2,
    type: "dark",
    img: dark,
  },
  {
    id: 3,
    type: "dragon",
    img: dragon,
  },
  {
    id: 4,
    type: "electric",
    img: electric,
  },
  {
    id: 5,
    type: "fairy",
    img: fairy,
  },
  {
    id: 6,
    type: "fighting",
    img: fighting,
  },
  {
    id: 7,
    type: "fire",
    img: fire,
  },
  {
    id: 8,
    type: "flying",
    img: flying,
  },
  {
    id: 9,
    type: "ghost",
    img: ghost,
  },
  {
    id: 10,
    type: "grass",
    img: grass,
  },
  {
    id: 11,
    type: "ground",
    img: ground,
  },
  {
    id: 12,
    type: "ice",
    img: ice,
  },
  {
    id: 13,
    type: "normal",
    img: normal,
  },
  {
    id: 14,
    type: "poison",
    img: poison,
  },
  {
    id: 15,
    type: "psychic",
    img: psychic,
  },
  {
    id: 16,
    type: "rock",
    img: rock,
  },
  {
    id: 17,
    type: "steel",
    img: steel,
  },
  {
    id: 18,
    type: "water",
    img: water,
  },
];

export const TypeDetail = ({ type }) => {
  const pokemonType = typePicture.find((element) => element.type === type);

  return (
    <img
      className="col-auto"
      alt="imagen-tipo"
      src={pokemonType.img}
      style={{ width: "10rem" }}
    />
  );
};
