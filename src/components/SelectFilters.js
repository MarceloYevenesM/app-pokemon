import React from "react";
import { Form } from "react-bootstrap";
import "../styles/select.css";

export const SelectFilters = ({ setFilter, filter }) => {
  const handleChange = (e) => {
    setFilter({ ...filter, select: e.target.value });
  };

  return (
    <Form.Select onChange={handleChange} defaultValue="" className="formSelect">
      <option value="">Ordenar por...</option>
      <option value="ascNum">Ascendente por número</option>
      <option value="desNum">Descendente por número</option>
      <option value="ascName">Ascendente por nombre</option>
      <option value="desName">Descendente por nombre</option>
    </Form.Select>
  );
};
