import React from "react";
import "./BackgroundDiv.css";

const bgDiv = props => (
  <div className="bgDiv1" style={{ backgroundColor: props.color }} />
);

export default bgDiv;
