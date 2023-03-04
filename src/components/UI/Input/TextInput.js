import React from "react";

import classes from "./Input.module.css";

function TextInput({
  name,
  type,
  onChange,
  onBlur,
  value,
  hasError,
  errorText,
  auth,
}) {
  const style = {};
  style.height = name === "description" ? "100px" : "19px";
  // style.width = auth && "100%";

  return (
    <div className={classes.container}>
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
    </div>
  );
}

export default TextInput;
