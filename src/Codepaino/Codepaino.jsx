import React from "react";
import { Button } from "react-bootstrap";
import "./COdepaino.css";

export const Codepaino = () => {
  const handlePlay = (bit) => {
    const audio = new Audio("new.mp3");
    audio.play();
  };
  return (
    <div className="sound">
      <Button
        variant="outline-dark"
        ClassName="Sa"
        onMouseDown={() => handlePlay("A")}
      >
        Sa
      </Button>

      <Button
        variant="outline-dark"
        ClassName="re"
        onMouseDown={() => handlePlay("B")}
      >
        re
      </Button>
      <Button
        variant="outline-dark"
        ClassName="ga"
        onMouseDown={() => handlePlay("C")}
      >
        ga
      </Button>
      <Button
        variant="outline-dark"
        ClassName="ma"
        onMouseDown={() => handlePlay("D")}
      >
        ma
      </Button>
      <Button
        variant="outline-dark"
        ClassName="pa"
        onMouseDown={() => handlePlay("E")}
      >
        pa
      </Button>
      <Button
        variant="outline-dark"
        ClassName="da"
        onMouseDown={() => handlePlay("F")}
      >
        da
      </Button>
      <Button
        variant="outline-dark"
        ClassName="ni"
        onMouseDown={() => handlePlay("G")}
      >
        ni
      </Button>
      <Button
        variant="outline-dark"
        ClassName="sa"
        onMouseDown={() => handlePlay("H")}
      >
        sa
      </Button>
    </div>
  );
};
