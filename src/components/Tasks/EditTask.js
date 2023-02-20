import React from "react";

import useInput from "../../hooks/useInput";
import Input from "../UI/Input/Input";
import DateInput from "../UI/Input/DateInput";
import ActionButton from "../UI/Buttons/ActionButton";
import ListInput from "../UI/Input/ListInput";
import { validator } from "../../utils/validator";
import classes from "./EditTask.module.css";

function EditTask({ boolean, toggle, title, text, date, listName }) {
  const enteredTitle = useInput(validator, title);
  const enteredDescription = useInput(validator, text);
  const enteredDate = useInput(validator, date);
  const enteredListName = useInput(validator, listName);

  const formIsValid = enteredTitle.isValid;

  console.log(enteredDate.value);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    //send request to server
    const data = {
      title: enteredTitle.value,
      description: enteredDescription.value,
      date: enteredDate.value,
      listName: enteredListName.value,
    };
    console.log(data);
    toggle();
  };

  const deleteHandler = () => {
    //send request to server to delete
    console.log("deleted");
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
        <ListInput
          value={enteredListName.value}
          onChange={enteredListName.valueChangeHandler}
        />
        <DateInput
          value={enteredDate.value}
          onChange={enteredDate.valueChangeHandler}
        />
      </div>
      <div className={classes.buttonContainer}>
        <ActionButton text="Delete Note" onClick={deleteHandler} />
        <ActionButton
          text="Save Changes"
          type="submit"
          disabled={!formIsValid}
        />
      </div>
    </form>
  );
}

export default EditTask;
