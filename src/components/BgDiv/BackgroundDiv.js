import React from "react";
import "./BackgroundDiv.css";

const bgDiv = props => (
  <div
    className="bgDiv1"
    id={"div" + props.color}
    style={{ backgroundColor: "#" + props.color }}
  >
    {props.content === "left" ? (
      <div className="leftContent">
        <div className="goLeft">
          <div className="title">
            <a href="/">DATA SCIENTIST, BACKEND DEVELOPER</a>
          </div>
        </div>
        <div className="arrowLeft">
          <a href="/">
            <i className="fas fa-long-arrow-alt-left" />
          </a>
        </div>
      </div>
    ) : (
      <div className="rightContent">
        <div className="goRight">
          <div className="title">
            <a href="http://www.google.com">SOFTWARE DEVELOPER</a>
          </div>
        </div>
        <div className="arrowRight">
          <a href="/">
            <i className="fas fa-long-arrow-alt-right" />
          </a>
        </div>
      </div>
    )}
  </div>
);

export default bgDiv;
