import React from "react";

import classes from "./ActionButton.module.css";

function ActionButton({ text, clickHandler, type, disabled }) {
  const style = {};
  const paragraphStyle = {};
  if (type === "submit") {
    style.backgroundColor = "#ffd43b";
    style.borderColor = "transparent";
  }
  if (type === "edit") {
    paragraphStyle.fontSize = "22px";
    style.borderColor = "transparent";
    style.width = "1px";
    style.marginTop = "20px";
  }
  return (
    <button
      className={classes.button}
      style={style}
      type={type}
      onClick={clickHandler}
      disabled={disabled}
    >
      <p style={paragraphStyle}>{text}</p>
    </button>
  );
}

export default ActionButton;
