import React, { useContext } from "react";

import useInput from "../../hooks/useInput";
import Input from "../UI/Input/Input";
import DateInput from "../UI/Input/DateInput";
import ActionButton from "../UI/Buttons/ActionButton";
import ListInput from "../UI/Input/ListInput";
import { validator } from "../../utils/validator";
import TasksContext from "../../store/TasksContext";
import classes from "./EditTask.module.css";

function EditTask({
  boolean,
  toggle,
  title,
  text,
  date,
  id,
  dateValue,
  listName,
}) {
  const taskCtx = useContext(TasksContext);
  const enteredTitle = useInput(validator, title);
  const enteredDescription = useInput(validator, text);
  const enteredDate = useInput(() => {}, dateValue);
  const enteredListName = useInput(validator, listName);

  const formIsValid = enteredTitle.isValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    //send request to server
    const data = {
      title: enteredTitle.value,
      description: enteredDescription.value,
      date: new Date(enteredDate.value),
      list: enteredListName.value,
      id: id,
    };

    if (data.id) {
      taskCtx.editTask(data);
    } else {
      taskCtx.addTask(data);
    }

    toggle();
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    taskCtx.removeTask(id);
    console.log("deleted");
    toggle();
  };
  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <div className={classes.inputContainer}>
        <Input
          name="Title"
          type="text"
          errorText="Title should not be empty"
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
          value={enteredDescription.value}
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

export default EditTask;
