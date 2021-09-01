import React from "react";
import { candidateData } from "../Reducers/candidateData";
import { Card, Form, Row, Col } from "react-bootstrap";
import "./Dynamiccomps.css";
export const DynamicCOmp = () => {
  return (
    <Row className="A">
      <Col md={1}></Col>
      <Col md={4}>
        <Card className="dynamic">
          {Object.keys(candidateData).map((key) => (
            <p>
              {key}:
              <Form.Control
                type={candidateData[key].type}
                value={candidateData[key].data}
                placeholder={candidateData[key].placeholder}
                className="B"
              />
            </p>
          ))}
        </Card>
      </Col>
      <Col md={6}></Col>
    </Row>
  );
};
