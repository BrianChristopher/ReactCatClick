import React from "react";
import "./style.css";

function GameArea(props) {
  return (
    <div className="container" id="gameArea">
      {props.children}
      
    </div>
  );
}

export default GameArea;
