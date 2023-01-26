import React from "react";
import "./Button.css";
const Buttons = (props) => {
  return (
    <button className="btn">
      <h2>{props.value}</h2>
    </button>
  );
};

export default Buttons;
