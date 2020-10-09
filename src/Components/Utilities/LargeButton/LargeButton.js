import React from "react";
import "./LargeButton.css";

export default function LargeButton(props) {
  return (
    <button className="large-btn" onClick={props.onClick}>
      {props.name}
    </button>
  );
}
