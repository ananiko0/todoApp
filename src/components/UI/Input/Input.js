import React from "react";

import classes from "./Input.module.css";

function Input({ name, height }) {
  return (
    <textarea placeholder={name} className={classes.input} style={{ height }} />
  );
}

export default Input;
