import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { L2 } from "../Section1/L2";
import { L5 } from "../Section1/L5";
export const Tabsmanger = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="section1" title="Section1">
        <h3>L2</h3>
        <L2 />
        <L5 />
      </Tab>
      <Tab eventKey="section2" title="Section2">
        Tab2
      </Tab>
      <Tab eventKey="section3" title="Section3">
        Tab3
      </Tab>
    </Tabs>
  );
};
