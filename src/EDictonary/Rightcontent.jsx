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
          <InputGroup.Text>Synonym</InputGroup.Text>
          <FormControl placeholder="Enter Words" />
        </InputGroup>
        <ProgressBar now={100} />
      </Card>
    </div>
  );
};
