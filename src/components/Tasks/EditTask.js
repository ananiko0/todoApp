import React, { useContext } from "react";
import { toast } from "react-toastify";

import Toast from "../UI/Toast/Toast";
import useInput from "../../hooks/useInput";
import Input from "../UI/Input/Input";
import DateInput from "../UI/Input/DateInput";
import ActionButton from "../UI/Buttons/ActionButton";
import ListInput from "../UI/Input/ListInput";
import TextInput from "../UI/Input/TextInput";
import { validator } from "../../utils/validator";
import TasksContext from "../../store/TasksContext";
import {
  getDefaultDateValue,
  getDefaultListValue,
} from "../../utils/HelperFunctions";
import classes from "./EditTask.module.css";
import { useLocation, useNavigate } from "react-router-dom";

function EditTask({ toggle, title, text, id, dateValue, listName }) {
  //get task context
  const taskCtx = useContext(TasksContext);
  const location = useLocation();
  const navigate = useNavigate();

  //get default date or location according to the page
  const date = getDefaultDateValue(location.pathname);
  const list = getDefaultListValue(location.pathname);

  //get input
  const enteredTitle = useInput(validator, title);
  const enteredDescription = useInput(validator, text);
  const enteredDate = useInput(() => {}, dateValue || date);
  const enteredListName = useInput(validator, listName || list);

  //check form validity
  const formIsValid = enteredTitle.isValid;

  //submit form
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    //set up data
    const data = {
      title: enteredTitle.value,
      description: enteredDescription.value,
      date: new Date(enteredDate.value),
      list: enteredListName.value,
      id: id,
    };

    //edit or add a new one
    if (data.id) {
      taskCtx.editTask(data);
    } else {
      taskCtx.addTask(data);
    }

    //show toast message
    toast("Changes Saved");

    //close editor
    toggle();
  };

  //delete task handler
  const deleteHandler = (event) => {
    event.preventDefault();
    taskCtx.removeTask(id);

    toast(
      <Toast
        onAction={() => {
          taskCtx.restoreTask(id);
          navigate(location.pathname);
        }}
        closeToast={() => {}}
        text="Item moved to bin"
        buttonText="Undo"
      />
    );

    //close editor
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

        <TextInput
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
