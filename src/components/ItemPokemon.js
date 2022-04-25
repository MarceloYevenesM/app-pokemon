import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/itemPokemon.css";
import { CustomButton } from "./CustomButton";

export const ItemPokemon = (pokemon) => {
  const { id, name, base_experience, height, weight, sprites, stats, types } =
    pokemon.pokemon;
  console.log(stats);
  return (
    <div className="d-flex row vh-100 justify-content-center align-items-center">
      <div className="col-10 col-sm-7 text-center">
        <div className="card">
          <Card.Header>Nº{id}</Card.Header>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 image">
                <h3>Pokémon de frente</h3>
                <img
                  src={sprites.front_default}
                  className="pokemonImg"
                  alt="Frente del pokémon"
                />
              </div>

              <div className="col-sm-12 col-md-6 image">
                <h3>Pokémon de espalda</h3>
                <img
                  src={sprites.back_default}
                  className="pokemonImg"
                  alt="Trasera del pokémon"
                />
              </div>
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="card-title namePokemon">{name}</h2>
            <h5 className="card-title">Experiencia base: {base_experience}</h5>
            <div className="tarjet">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h5>Altura: {height}cm</h5>
                  <h5>Hp: {stats[0].base_stat}</h5>
                  <h5>Ataque: {stats[1].base_stat}</h5>
                  <h5>Defensa: {stats[2].base_stat}</h5>
                </div>
                <div className="col-12 col-md-6">
                  <h5>Peso: {weight}g</h5>
                  <h5>Velocidad: {stats[5].base_stat}</h5>
                  <h5>Ataque especial: {stats[3].base_stat}</h5>
                  <h5>Defensa especial: {stats[4].base_stat}</h5>
                </div>
              </div>
            </div>

            <Link to={`/`} className="link">
              <CustomButton name={"Volver al inicio"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
