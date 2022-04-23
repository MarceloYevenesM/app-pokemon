import React from "react";

export const Search = ({ setFilter, filter }) => {
  const handleChange = (e) => {
    setFilter({ ...filter, search: e.target.value });
  };

  return (
    <div className="row">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Buscar Pokémon por nombre"
      />
    </div>
  );
};
