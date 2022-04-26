import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/search.css";

export const Search = ({ setFilter, filter }) => {
  const handleChange = (e) => {
    setFilter({ ...filter, search: e.target.value });
  };

  return (
    <>
      <input
        className="inputSearch"
        type="text"
        onChange={handleChange}
        placeholder="Buscar Pokémon por nombre o por número"
      />
      <i className="icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
    </>
  );
};
