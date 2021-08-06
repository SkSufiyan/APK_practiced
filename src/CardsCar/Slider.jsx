import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";

export const Slider = () => {
  return (
    <div>
      <Carousel>
        <Row xs={1} md={3}>
          <Carousel.Item>
            <Col>
              <Card border="success" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../Angularjs.jpg" />
                <Card.Body>
                  <br />
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="secondary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../Azure.png" />
                <Card.Body>
                  <br />
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../Bootstrap.png" />
                <Card.Body>
                  <br />
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Carousel.Item>
        </Row>
      </Carousel>
    </div>
  );
};
