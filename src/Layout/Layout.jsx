import React from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import { LayoutReducer } from "./LayoutReducer";

export const Layout = () => {
  const { Firstname, LastName, LineNo1, LineNo2, City } = LayoutReducer.Data[0];
  const [fname, setFname] = useState(Firstname);
  const [lname, setLname] = useState(LastName);
  const [Line1, setLineNo1] = useState(LineNo1);
  const [Line2, setLineNo2] = useState(LineNo2);
  // const [City, setCity] = useState(City);
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col>
          <Row>
            {/* ---------------Card1-------------------- */}
            <Col md={4} className="my-1">
              <Form>
                <Form.Label>FirstName</Form.Label>
                <br />
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFname(e.target.value)}
                  value={fname}
                />

                <br />
                <Form.Label>LastName</Form.Label>
                <br />
                <Form.Control
                  type="text"
                  placeholder="Last  Name"
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
                <Form.Control type="text" placeholder="City" />
                <br />
              </Form>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* ------------------Card1----------------- */}
              <Card>
                {/* -------Card2---------- */}
                <Row>
                  <img
                    src="./image.jpg"
                    alt="./image.jpg"
                    height="300px"
                    width="200px"
                  />
                  <Col>
                    <h4>{`${fname} ${lname},`}</h4>
                  </Col>
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
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
