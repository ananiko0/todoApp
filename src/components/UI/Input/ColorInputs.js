import React from "react";

import colors from "../../../utils/colors";

import classes from "./ColorInputs.module.css";

function ColorInputs({ onChange, value }) {
  console.log(value);
  const colorsDisplay = colors.map((item) => {
    const checked = value === item.code;
    return (
      <label
        value={item.code}
        className={classes.radioButton}
        style={{ borderColor: item.code }}
        key={item.code}
      >
        <input
          type="radio"
          name="sample"
          value={item.code}
          checked={checked}
          onChange={onChange}
        />
        <span
          className={classes.checkMark}
          style={{ backgroundColor: item.code }}
        ></span>
      </label>
    );
  });

  return <div className={classes.container}>{colorsDisplay}</div>;
}

export default ColorInputs;
