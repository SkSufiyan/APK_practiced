import React from "react";
import "./EmpList.css";
import { Card, Image } from "react-bootstrap";

export const EmpItem = ({ itemData }) => {
  return (
    <Card>
      <h4 className="EmpItem">Employee item</h4>
      <Image src={itemData.Image} />
      <span>Name:{itemData.Name}</span>
      <span>instituteName:{itemData.instituteName}</span>
      <span>City:{itemData.City}</span>
      <span>Contact:{itemData.contact}</span>
    </Card>
  );
};
