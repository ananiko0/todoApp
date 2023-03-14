import React from "react";
import classes from "./Toast.module.css";

function Toast({ onAction, closeToast, text, buttonText }) {
  const handleClick = (event) => {
    event.preventDefault();
    onAction();
    closeToast();
  };

  return (
    <div className={classes.container}>
      <h3>{text}</h3>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Toast;
