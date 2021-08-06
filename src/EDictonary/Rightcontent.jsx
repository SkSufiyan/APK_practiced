import React from "react";
import {
  Card,
  Form,
  FormControl,
  InputGroup,
  ProgressBar,
} from "react-bootstrap";
export const Rightcontent = () => {
  return (
    <div>
      <Card>
        <InputGroup>
          <InputGroup.Text>Synonys</InputGroup.Text>
          <FormControl placeholder="Enter Words" />
        </InputGroup>
        <ProgressBar now={80} />
      </Card>
    </div>
  );
};
