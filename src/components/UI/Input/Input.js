import React, { Fragment } from "react";

import classes from "./Input.module.css";

function Input({ name, type, onChange, onBlur, value, hasError, errorText }) {
  const style = {};
  style.height = name === "Title" ? "19px" : "100px";

  return (
    <Fragment>
      <textarea
        placeholder={name}
        className={classes.input}
        style={style}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {hasError && <p className={classes.errorText}>{errorText}</p>}
    </Fragment>
  );
}

export default Input;
