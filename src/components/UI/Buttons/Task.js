import React from "react";
import { AiFillEdit } from "react-icons/ai";
import ActionButton from "./ActionButton";

import classes from "./Task.module.css";

function Task({ name }) {
  return (
    <div className={classes.container}>
      <label class={classes.label}>
        <input type="checkbox" />
        {name}
        <span class={classes.checkMark}></span>
      </label>
      <ActionButton type="edit" text={<AiFillEdit />} />
    </div>
  );
}

export default Task;
