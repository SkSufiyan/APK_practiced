import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./Audioplyer.css";

export const AudioPlayer = () => {
  const audio = new Audio("new.mp3");

  const handleAudioPlay = () => {
    audio.play();
  };

  const handleAudiopause = () => {
    audio.pause();
  };

  return (
    <Card className="player">
      <Row>
        <Col>
          <Button onClick={handleAudioPlay}>Play</Button>
        </Col>
        <Col>
          <Button onClick={handleAudiopause}>Stop</Button>
        </Col>
        <Col>
          <Button onMouseDown={handleAudioPlay} onMouseUp={handleAudiopause}>
            piano
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
