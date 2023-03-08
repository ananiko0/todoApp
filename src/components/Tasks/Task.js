import React, { useContext } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { HiCalendarDays, HiArrowUturnLeft } from "react-icons/hi2";
import { BsFillSquareFill } from "react-icons/bs";
import ActionButton from "../UI/Buttons/ActionButton";
import useSlider from "../../hooks/useSlider";
import classes from "./Task.module.css";
import TaskSlider from "./TaskSlider";
import ListContext from "../../store/ListContext";
import TasksContext from "../../store/TasksContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "../UI/Toast/Toast";

function Task({
  name,
  id,
  date,
  dateValue,
  listName,
  text,
  ListNameNotVisible,
  completed,
  trashed,
}) {
  //set slider state
  const { boolean, toggleHandler } = useSlider(false);

  //get location and navigation for rerendering page after task is completed
  const navigate = useNavigate();
  const location = useLocation();

  //get list and task contexts
  const { lists } = useContext(ListContext);
  const {
    removeTask,
    completeTask,
    uncompleteTask,
    removePermanently,
    restoreTask,
  } = useContext(TasksContext);

  //check if date and list name is available
  const dateIsAvailable = !!date;
  const listNameIsAvalable = !!listName;

  //set correct color
  const colors = lists.filter((item) => item.name.toLowerCase() === listName);
  let color;
  if (colors.length > 0) {
    color = colors[0].color;
  }

  //render date
  const dateInfo = dateIsAvailable ? (
    <div className={classes.dateContainer}>
      <HiCalendarDays color="grey" />
      {date}
    </div>
  ) : (
    ""
  );

  //render list name and color icon
  const listInfoElement =
    listNameIsAvalable && !ListNameNotVisible ? (
      <div className={classes.listnameContainer}>
        <BsFillSquareFill color={color} />
        {listName}
      </div>
    ) : (
      ""
    );

  //set info container visibility
  const infoContainerVisible = dateIsAvailable || listNameIsAvalable;

  //render list and date
  const infoContainer = infoContainerVisible && (
    <div className={classes.infoContainer}>
      {dateInfo} {listInfoElement}
    </div>
  );

  //delete task funciton
  const deleteTaskHandler = (event) => {
    if (trashed || completed) {
      setTimeout(() => {
        toast(
          <Toast
            onAction={() => {
              removePermanently(id);
              navigate(location.pathname);
            }}
            closeToast={() => {}}
            text="Are you sure you want to delete premanently?"
            buttonText="Yes"
          />
        );

        navigate(location.pathname);
      }, 500);
    } else {
      removeTask(id);
      navigate(location.pathname);
      toast(
        <Toast
          onAction={() => {
            restoreTask(id);
            navigate(location.pathname);
          }}
          closeToast={() => {}}
          text="Item moved to bin"
          buttonText="Undo"
        />
      );
    }
  };

  //complete task
  const compleTaskHandler = () => {
    setTimeout(() => {
      completeTask(id);
      navigate(location.pathname);
    }, 500);
    toast(
      <Toast
        onAction={() => {
          uncompleteTask(id);
          navigate(location.pathname);
        }}
        closeToast={() => {}}
        text="Task Marked as completed"
        buttonText="Undo"
      />
    );
  };

  //uncomplete task
  const undoHandler = () => {
    if (completed) {
      setTimeout(() => {
        uncompleteTask(id);
        navigate(location.pathname);
      }, 500);
    } else if (trashed) {
      setTimeout(() => {
        restoreTask(id);
        navigate(location.pathname);
      }, 500);
    }
    toast("taks restored");
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <label
          className={
            completed || trashed ? classes.labelCompleted : classes.label
          }
        >
          {!completed && !trashed && (
            <input type="checkbox" onChange={compleTaskHandler} />
          )}

          {name}
          <span className={classes.checkMark} />
        </label>

        <div className={classes.icons}>
          <ActionButton
            type="edit"
            text={
              completed || trashed ? <HiArrowUturnLeft /> : <AiOutlineEdit />
            }
            clickHandler={completed || trashed ? undoHandler : toggleHandler}
          />

          <ActionButton
            type="edit"
            text={<AiOutlineDelete />}
            clickHandler={deleteTaskHandler}
          />
        </div>

        <TaskSlider
          title={name}
          id={id}
          text={text}
          date={date}
          listName={listName}
          toggleHandler={toggleHandler}
          boolean={boolean}
          dateValue={dateValue}
        />
      </div>

      <div className={classes.description}>{text}</div>
      {infoContainer}
    </div>
  );
}

export default Task;
