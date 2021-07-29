import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
// import { useState } from "react";
// import { Button } from "bootstrap";

export const ToggleComps = () => {
  const [colorName, setColorName] = useState("Orange");

  return (
    <div>
      <Card>
        <Button
          onClick={() =>
            colorName === "Blue" ? setColorName("Orange") : setColorName("Blue")
          }
        >
          Toggle Button
        </Button>

        <h3>Pickupbiz Here</h3>
        <p>This is my Content</p>
        <h1 style={{ color: colorName }}>PDAC Course</h1>
        <Button onClick={() => setColorName("Blue")}>Blue</Button>
        <Button onClick={() => setColorName("Red")}>REd</Button>
        <Button onClick={() => setColorName("wheat")}>Wheat</Button>
        <Button onClick={() => setColorName("DimGray")}>DimGray</Button>
      </Card>
    </div>
  );
};
