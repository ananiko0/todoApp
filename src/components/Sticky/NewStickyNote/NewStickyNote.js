import React from "react";

import colors from "../../../utils/colors";
import Input from "../../UI/Input/Input";
import classes from "./NewStickyNote.module.css";
import ActionButton from "../../UI/Buttons/ActionButton";

function NewStickyNote(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  const colorsDisplay = colors.map((item) => (
    <label
      className={classes.radioButton}
      style={{ borderColor: item.code }}
      key={item.code}
    >
      <input type="radio" name="sample" value={item.code} />
      <span
        className={classes.checkMark}
        style={{ backgroundColor: item.code }}
      ></span>
    </label>
  ));
  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <div className={classes.inputContainer}>
        <Input name="Title" />
        <Input name="description" />
        <h6>Choose Color:</h6>
        <div className={classes.colorsContainer}>{colorsDisplay}</div>
      </div>
      <div className={classes.buttonContainer}>
        <ActionButton text="Delete Note" onClick={() => {}} />
        <ActionButton text="Save Changes" type="submit" onClick={() => {}} />
      </div>
    </form>
  );
}

export default NewStickyNote;
