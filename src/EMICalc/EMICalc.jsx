import React, { useState } from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import "./EMICalc.css";

export const EMICalc = () => {
  const [p, setP] = useState(0);

  const [n, setN] = useState(0);

  const [r, setR] = useState(0);

  const [emi, setEmi] = useState(0);

  const handleCalEMI = () => {
    const si = (p * n * r) / 100;

    const repayAmount = Number(p) + Number(si);

    const emiLocal = repayAmount / (n * 12);

    setEmi(emiLocal);
  };
  return (
    <div>
      <Card className="Calc">
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Principal"
              onChange={(e) => setP(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Numbers of Years"
              onChange={(e) => setN(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Rate of Interest"
              onChange={(e) => setR(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Button variant="primary" onClick={handleCalEMI}>
              Calcutate EMI
            </Button>
          </Col>
          <Col md={3}></Col>
          <Col md={6}>
            <h1>EMI : {emi}</h1>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
