import React from "react";
import { GrFormAdd } from "react-icons/gr";

import classes from "./AddTaskButton.module.css";

function AddTaskButton(props) {
  return (
    <button className={classes.button}>
      <GrFormAdd className={classes.icon} />
      <p>Add New Task</p>
    </button>
  );
}

export default AddTaskButton;
