import React from "react";

import { inputDate } from "../../../utils/DateFunctions";
import classes from "./DateInput.module.css";

function DateInput({ onChange, value }) {
  return (
    <div className={classes.container}>
      <label htmlFor="due-date">
        <h6>Due Date</h6>
      </label>

      <input
        className={classes.date}
        onChange={onChange}
        type="date"
        id="due-date"
        name="due-date"
        value={inputDate(value)}
        min="2022-01-01"
      ></input>
    </div>
  );
}

export default DateInput;
