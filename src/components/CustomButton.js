import React from "react";
import { Button } from "react-bootstrap";


export const CustomButton = ({ name, styles }) => {
  
  return <Button bsPrefix={styles}>{name}</Button>;
};
