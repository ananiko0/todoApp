import React from "react";
import { HiPlusCircle } from "react-icons/hi2";

import useInput from "../../../hooks/useInput";
import classes from "./NewList.module.css";

function NewList({ onSubmit }) {
  //get listname input
  const enteredListName = useInput(() => {});

  //add new list
  const submitHandler = (event) => {
    event.preventDefault();

    //call submit function from props
    onSubmit(enteredListName.value);
    enteredListName.reset();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        placeholder="Add List"
        className={classes.input}
        onChange={enteredListName.valueChangeHandler}
        value={enteredListName.value}
      />
      <button type="submit" className={classes.button}>
        <HiPlusCircle className={classes.icon} />
      </button>
    </form>
  );
}

export default NewList;
