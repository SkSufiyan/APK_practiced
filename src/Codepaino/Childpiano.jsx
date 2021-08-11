import React from "react";
import { Button } from "react-bootstrap";

export const Childpaino = () => {
  const handlePlay = () => {
    const audio = new Audio("new.mp3");
    audio.play();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "a" && handlePlay("A"));
    if (e.key === "s" && handlePlay("B"));
    if (e.key === "d" && handlePlay("C"));
    if (e.key === "f" && handlePlay("D"));
    if (e.key === "j" && handlePlay("E"));
    if (e.key === "k" && handlePlay("F"));
    if (e.key === "l" && handlePlay("G"));
    if (e.key === "A" && handlePlay("Ab"));
    if (e.key === "S" && handlePlay("Bb"));
    if (e.key === "D" && handlePlay("C"));
    if (e.key === "F" && handlePlay("Db"));
    if (e.key === "J" && handlePlay("EB"));
    if (e.key === "K" && handlePlay("F"));
    if (e.key === "L" && handlePlay("Gb"));
    e.stopPropagation();
  });
  return (
    <div className="sound">
      <Button id="A" className="sa" onCilck={() => handlePlay("A")}>
        Sa
      </Button>
      <Button id="B" className="re" onCilck={() => handlePlay("B")}>
        Re
      </Button>
      <Button id="C" className="ga" onCilck={() => handlePlay("C")}>
        Ga
      </Button>
      <Button id="D" className="ma" onCilck={() => handlePlay("D")}>
        Ma
      </Button>
      <Button id="E" className="da" onCilck={() => handlePlay("E")}>
        Sa
      </Button>
      <Button id="F" className="ni" onCilck={() => handlePlay("F")}>
        Sa
      </Button>
      <Button id="G" className="sa" onCilck={() => handlePlay("G")}>
        Sa
      </Button>
    </div>
  );
};
