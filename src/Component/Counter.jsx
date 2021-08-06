import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import axios from "axios";

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  const [name, setName] = useState("asynway");
  const handleApi = () => {
    axios.get("http://localhost:4000").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <Row>
        <Col>
          <Button
            variant="primary"
            onClick={() => cntr > 0 && setCntr(cntr - 1)}
          >
            -
          </Button>
        </Col>
        <Col>
          <h1>{cntr}</h1>
        </Col>
        <Col>
          <Button
            variant="primary"
            onClick={() => cntr < 10 && setCntr(cntr + 1)}
          >
            +
          </Button>
        </Col>
        <Col>
          <Button onClick={handleApi}>Call my Api</Button>
        </Col>
      </Row>
    </div>
  );
};
