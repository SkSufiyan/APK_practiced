import React from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { Pronounciation } from "./Pronounciation";
import "./Dict.css";
import { Meaninglist } from "./Meaninglist";

export const Lef = ({
  handleSearch,
  handleAudioPlay,
  resData,
  setWordSearch,
}) => {
  return (
    <Card className="leftcontent">
      <Row>
        <Col md={8}>
          <Form.Control
            type="search"
            placeholder="type a word ..."
            onChange={(e) => setWordSearch(e.target.value)}
            onKeyPress={handleSearch}
          ></Form.Control>
        </Col>
        <Col md={2}>
          <Button onClick={handleSearch}>search</Button>
        </Col>
        <Col md={2}></Col>
      </Row>
      {resData.map((item) => item && <Pronounciation item={resData[0]} />)}
      {resData.map(
        (item) => item.meanings.length > 0 && <Meaninglist item={item} />
      )}
    </Card>
  );
};
