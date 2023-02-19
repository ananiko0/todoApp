import React from "react";

import classes from "./Button.module.css";

function ActionButton({ text, clickHandler, type }) {
  const style = {};
  if (type === "submit") {
    style.backgroundColor = "#ffd43b";
    style.borderColor = "transparent";
  }
  return (
    <button
      className={classes.button}
      style={style}
      type={type}
      onClick={clickHandler}
    >
      <p>{text}</p>
    </button>
  );
}

export default ActionButton;
