import React from "react";
import "./ImageView.css";

const imageView = props => (
  <div className="imageView">
    <img
      src={props.source}
      style={{ width: props.sizeInPercent + "%" }}
      alt=""
    />
  </div>
);

export default imageView;
