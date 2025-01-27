import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css"; // Correct path to the CSS file

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null);

  return (
    <div>
    {/* Traffic pole */}
    <div id="trafficPole"></div>
  
    <div id="lightContainer">
      <div
        className={`redLight ${activeLight === "red" ? "glow" : ""}`}
        onClick={() => setActiveLight("red")}
      ></div>
      <div
        className={`yellowLight ${activeLight === "yellow" ? "glow" : ""}`}
        onClick={() => setActiveLight("yellow")}
      ></div>
      <div
        className={`greenLight ${activeLight === "green" ? "glow" : ""}`}
        onClick={() => setActiveLight("green")}
      ></div>
    </div>
  </div>
  
  );
};

ReactDOM.render(<TrafficLight />, document.getElementById("root"));
