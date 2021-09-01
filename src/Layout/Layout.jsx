import React from "react";
import { Button, Form, Row, Col, Card, Image } from "react-bootstrap";
import { useState } from "react";
import { LayoutReducer } from "./LayoutReducer";

export const Layout = () => {
  const { FirstName, LastName, LineNo1, LineNo2, City } = LayoutReducer.Data[0];
  const [fname, setFname] = useState(FirstName);
  const [lname, setLname] = useState(LastName);
  const [Line1, setLineNo1] = useState(LineNo1);
  const [Line2, setLineNo2] = useState(LineNo2);
  const [city, setCity] = useState(City);
  return (
    <div>
      <Card className="A">
        <Row>
          <Col md={1}></Col>
          <Col>
            <Row>
              {/* ---------------Card1-------------------- */}
              <Col md={5} className="my-1">
                <Form>
                  <Form.Label>FirstName</Form.Label>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="FirstName"
                    onChange={(e) => setFname(e.target.value)}
                    value={fname}
                  />

                  <br />
                  <Form.Label>LastName</Form.Label>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="LastName"
                    onChange={(e) => setLname(e.target.value)}
                    value={lname}
                  />
                  <br />

                  <Form.Label>Address</Form.Label>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Line 1"
                    onChange={(e) => setLineNo1(e.target.value)}
                    value={LineNo1}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Line 2"
                    onChange={(e) => setLineNo2(e.target.value)}
                    value={LineNo2}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="City"
                    onChange={(e) => setLineNo2(e.target.value)}
                    value={City}
                  />
                  <br />
                </Form>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                {/* ------------------Card1----------------- */}
                <Card>
                  {/* -------Card2---------- */}
                  <Row>
                    <Image src="./Azure.png" height="100px" width="50px" />
                    <Col>
                      <h4>{`${fname}`}</h4>
                    </Col>
                    <Col>{`${lname}`}</Col>
                  </Row>
                  <Row>
                    <Col>{`${Line1},`}</Col>
                  </Row>
                  <Row>
                    <Col>{`${Line2},`}</Col>
                  </Row>
                </Card>
                {/* --------Card2------- */}
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Card>
    </div>
  );
};
