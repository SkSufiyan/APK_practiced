import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export const Counter = () => {
  const [cntr, setCntr] = useState(0);
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
      </Row>
    </div>
  );
};
