import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import ColorInputs from "../../UI/Input/ColorInputs";
import useInput from "../../../hooks/useInput";
import { validator } from "../../../utils/validator";
import Input from "../../UI/Input/Input";
import classes from "./NewStickyNote.module.css";
import ActionButton from "../../UI/Buttons/ActionButton";
import TextInput from "../../UI/Input/TextInput";
import StickyContext from "../../../store/StickyContext";

function NewStickyNote({ toggle, title, id, text, color }) {
  //get context
  const stickyCtx = useContext(StickyContext);
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
    const data = {
      title: enteredTitle.value,
      text: enteredDescription.value,
      color: chosenColor,
      id: id,
    };
    if (data.id) {
      stickyCtx.editNote(data);
    } else {
      stickyCtx.addNote(data);
    }
    toast("Changes Saved");

    //maybe later add close function in useSlider and use it instead of toggle
    toggle();
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    stickyCtx.removeNote(id);
    toast("Note Deleted");
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

        <TextInput
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
        <ActionButton text="Delete Note" clickHandler={deleteHandler} />

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
