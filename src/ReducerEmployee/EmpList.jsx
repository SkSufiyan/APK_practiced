import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import { EmpItem } from "./EmpItem";
import "./EmpList.css";
import { Cources } from "../Renders/Cources";

export const EmpList = () => {
  const [empArr, setEmpArr] = useState(Cources.Data);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filterArr = empArr.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.instituteName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.contact.toLowerCase().includes(searchText.toLowerCase()) ||
        item.City.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setEmpArr(Cources.Data);
    else setEmpArr(filterArr);
  }, [searchText, empArr]);
  return (
    <Card className="EmpList">
      <h2>EmpList</h2>
      <Form.Control
        input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      ></Form.Control>
      <Row>
        {empArr.map((item) => (
          <Col md={4}>
            <EmpItem itemData={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
