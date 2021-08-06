import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { L } from "./L";

import { Rightcontent } from "./Rightcontent";
export const Home = () => {
  return (
    <div>
      <Row>
        <Col md={8}>
          <L />
        </Col>
        <Col md={4}>
          <Rightcontent />
        </Col>
      </Row>
    </div>
  );
};
