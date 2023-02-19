import React from "react";

import classes from "./Input.module.css";

function Input({ name }) {
  const style = {};
  style.height = name === "Title" ? "19px" : "100px";
  return (
    <textarea placeholder={name} className={classes.input} style={style} />
  );
}

export default Input;
