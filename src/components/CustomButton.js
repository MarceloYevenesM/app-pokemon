import React from "react";
import { Button } from "react-bootstrap";
import "../styles/button.css";

export const CustomButton = ({name}) => {
  return <Button bsPrefix="details">{name}</Button>;
};
