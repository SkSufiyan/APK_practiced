import React from "react";
import { Card } from "react-bootstrap";
import { Meaning } from "./Meaning";
import "./Dict.css";

export const Meaninglist = ({ item }) => {
  return (
    <Card className="meaning">
      <h2>Meaning List</h2>
      {item.meanings.map((m) => (
        <Meaning m={m} />
      ))}
    </Card>
  );
};
