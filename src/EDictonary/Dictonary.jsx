import axios from "axios";
import React from "react";
import { Row, Col, Button, Dropdown } from "react-bootstrap";
import { L } from "./L";
import { Rightcontent } from "./Rightcontent";
import "./Dictionary.css";
export const Dictonary = () => {
  const [resData, setResData] = useState([]);
  const handleSearch = () => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word")
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <h1>e-Dcitionary</h1>
      <Row>
        <Col lg={1}></Col>
        <Col md={2}>
          <input type="text" placeholder="Rate 🔍" />
          <a href="#">Pronunciation</a> <Button>⏯️ </Button>
          <input type="text" placeholder="Price of product" />
          <input type="text" placeholder="pace of object" />
        </Col>
        <Col md={2}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              English-UI
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">American</Dropdown.Item>
              <Dropdown.Item href="#">Spanish</Dropdown.Item>
              <Dropdown.Item href="#">English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Row>
            <a href="#">Synonym</a>
            <a href="#">A</a>
            <a href="#">B</a>
            <a href="#">C</a>
          </Row>
          <Row>
            <a href="#">Antonyms</a>
            <a href="#">A</a>
            <a href="#">B</a>
            <a href="#">C</a>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
