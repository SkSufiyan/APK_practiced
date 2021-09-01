import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Dict.css";
import { Sound } from "./Sound";

export const Pronounciation = ({ item }) => {
  return (
    <Card className="card-2">
      <Row>
        <Col>
          <h2>Pronounciation</h2>
        </Col>
        <Col>
          <h3>{item.phonetic}</h3>
        </Col>
        <Col>
          {item.phonetics.map((a) => (
            <Sound a={item.phonetics[0]} />
          ))}
        </Col>
      </Row>
    </Card>
  );
};
