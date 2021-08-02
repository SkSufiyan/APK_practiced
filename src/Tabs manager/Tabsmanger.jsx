import React from "react";
import { Tab, Tabs } from "react-bootstrap";
export const Tabsmanger = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab1
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab2
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab3
      </Tab>
    </Tabs>
  );
};
