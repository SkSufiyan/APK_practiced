import React from "react";
import { Row, Col } from "react-bootstrap";
export const GridLayout = () => {
  return (
    <div>
      <Row className="all-row">
        <Col xl={3}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Full Name" />
        </Col>

        <Col md={1} xl={2}>
          <input type="Phone" placeholder="Enter Number" />

          <input type="email" placeholder="email" />
          <input type="text" placeholder="CurrentAddress" />

          <input type="text" placeholder="PermanentAddress" />

          <input type="Submit" placeholder="Submit" />
        </Col>
      </Row>
    </div>
  );
};
