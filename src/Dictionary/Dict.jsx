import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Lef } from "./Lef";
import { RightContent } from "./RightContent";
import axios from "axios";
import "./Dict.css";

export const Dict = () => {
  const [resData, setResData] = useState([]);
  const [wordSearch, setWordSearch] = useState("");
  const handleSearch = (e) => {
    if (e.code === "Enter" || e.type === "click") {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordSearch}`)
        .then((res) => {
          console.log(res.data);
          setResData([...res.data]);
        });
    }
  };
  return (
    <Card className="dictionary">
      <Row>
        <Col md={8}>
          <Lef
            handleSearch={handleSearch}
            resData={resData}
            setWordSearch={setWordSearch}
          />
        </Col>
        <Col md={4}>
          <RightContent />
        </Col>
      </Row>
    </Card>
  );
};
