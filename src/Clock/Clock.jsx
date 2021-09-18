import React, { useState } from "react";

import "./Clock.css";
export const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  return <h1 className="Center">{time}</h1>;
};
