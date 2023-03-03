import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsCalendar2XFill, BsFillSquareFill } from "react-icons/bs";
import ActionButton from "../UI/Buttons/ActionButton";
import useSlider from "../../hooks/useSlider";
import listInfo from "../sidebar/Lists/listInfo";
import classes from "./Task.module.css";
import TaskSlider from "./TaskSlider";

function Task({ name, id, date, dateValue, listName, text }) {
  const { boolean, toggleHandler } = useSlider(false);
  const dateIsAvailable = !!date;
  const listNameIsAvalable = !!listName;

  //set correct color
  const colors = listInfo.filter(
    (item) => item.name.toLowerCase() === listName
  );
  let color;
  if (colors.length > 0) {
    color = colors[0].color;
  }

  const dateInfo = dateIsAvailable ? (
    <div className={classes.dateContainer}>
      <BsCalendar2XFill color="grey" />
      {date}
    </div>
  ) : (
    ""
  );
  const listInfoElement = listNameIsAvalable ? (
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
      {dateInfo} {listInfoElement}
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
          id={id}
          text={text}
          date={date}
          listName={listName}
          toggleHandler={toggleHandler}
          boolean={boolean}
          dateValue={dateValue}
        />
      </div>
      {infoContainer}
    </div>
  );
}

export default Task;
