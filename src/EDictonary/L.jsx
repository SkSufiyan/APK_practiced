import React from "react";

import {
  Card,
  InputGroup,
  Form,
  FormControl,
  ProgressBar,
} from "react-bootstrap";

export const L = () => {
  return (
    <Card className="">
      <InputGroup className="mb-3">
        <FormControl placeholder="Search " />
        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
      </InputGroup>

      <Form.Label>Pronounciation</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">Meaning</InputGroup.Text>
        <FormControl />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>
      <ProgressBar now={60} />
    </Card>
  );
};
