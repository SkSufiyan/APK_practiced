import React from "react";
import { Button } from "react-bootstrap";

export const Sound = ({ a }) => {
  const audio = new Audio(`https:${a.audio}`);

  const start = () => audio.play();
  return <Button onClick={start}>Play</Button>;
};
