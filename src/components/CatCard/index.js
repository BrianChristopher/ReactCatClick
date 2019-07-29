import React from "react";
import "./style.css";

function CatCard(props) {
  return (
    <div className="card" onClick={() => props.handleCatClick(props.id)}>
      <img src={props.image} className="card-img-top" alt={props.name} />
    </div>
  );
}

export default CatCard;

