import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logoPokemon.png";
import "../styles/header.css";

export const Header = () => {
  return (
    <Navbar className="header">
      <Container>
        <Link to={`/`}>
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top"
            alt="Logo Pokémon"
          />
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Por Marcelo Yévenes</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
