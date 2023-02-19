import React, { useState } from "react";

import ColorInputs from "../../UI/Input/ColorInputs";
import useInput from "../../../hooks/useInput";
import { validator } from "../../../utils/validator";
import Input from "../../UI/Input/Input";
import classes from "./NewStickyNote.module.css";
import ActionButton from "../../UI/Buttons/ActionButton";

function NewStickyNote({ toggle, title, text, color }) {
  //get entered values
  const enteredTitle = useInput(validator, title);
  const enteredDescription = useInput(validator, text);

  //get chosen color
  const [chosenColor, setChosenColor] = useState(color || "#ffdada");
  const changeColorHandler = (event) => {
    setChosenColor(event.target.value);
  };

  //check form validity
  const formIsValid = enteredTitle.isValid && enteredDescription.isValid;

  //submit
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    //send request to server
    console.log(
      { title: enteredTitle.value },
      { enteredDescription: enteredDescription.value },
      { color: chosenColor }
    );
    console.log("submitted");

    //maybe later add close function in useSlider and use it instead of toggle
    toggle();
  };

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <div className={classes.inputContainer}>
        <Input
          name="Title"
          type="text"
          errorText="Title should note be empty"
          onChange={enteredTitle.valueChangeHandler}
          onBlur={enteredTitle.inputBlurHandler}
          value={enteredTitle.value}
          hasError={enteredTitle.hasError}
        />
        <Input
          name="description"
          type="text"
          errorText="Title should note be empty"
          onChange={enteredDescription.valueChangeHandler}
          onBlur={enteredDescription.inputBlurHandler}
          value={enteredDescription.value}
          hasError={enteredDescription.hasError}
        />
        <h6>Choose Color:</h6>
        <ColorInputs onChange={changeColorHandler} />
      </div>
      <div className={classes.buttonContainer}>
        <ActionButton text="Delete Note" onClick={() => {}} />
        <ActionButton
          text="Save Changes"
          type="submit"
          disabled={!formIsValid}
        />
      </div>
    </form>
  );
}

export default NewStickyNote;
