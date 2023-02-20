import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsCalendar2XFill, BsFillSquareFill } from "react-icons/bs";
import ActionButton from "../UI/Buttons/ActionButton";
import useSlider from "../../hooks/useSlider";

import classes from "./Task.module.css";
import TaskSlider from "./TaskSlider";

function Task({ name, date, listName, color, text }) {
  const { boolean, toggleHandler } = useSlider(false);
  const dateIsAvailable = !!date;
  const listNameIsAvalable = !!listName;

  const dateInfo = dateIsAvailable ? (
    <div className={classes.dateContainer}>
      <BsCalendar2XFill color="grey" />
      {date}
    </div>
  ) : (
    ""
  );
  const listInfo = listNameIsAvalable ? (
    <div className={classes.listnameContainer}>
      <BsFillSquareFill color={color} />
      {listName}
    </div>
  ) : (
    ""
  );
  const infoContainerVisible = dateIsAvailable || listNameIsAvalable;

  const infoContainer = infoContainerVisible && (
    <div className={classes.infoContainer}>
      {dateInfo} {listInfo}
    </div>
  );

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <label className={classes.label}>
          <input type="checkbox" />
          {name}
          <span className={classes.checkMark}></span>
        </label>
        <ActionButton
          type="edit"
          text={<AiFillEdit />}
          clickHandler={toggleHandler}
        />
        <TaskSlider
          title={name}
          text={text}
          date={date}
          listName={listName}
          toggleHandler={toggleHandler}
          boolean={boolean}
        />
      </div>
      {infoContainer}
    </div>
  );
}

export default Task;
