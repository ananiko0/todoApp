import React, { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsCalendar2XFill, BsFillSquareFill } from "react-icons/bs";
import ActionButton from "../UI/Buttons/ActionButton";
import useSlider from "../../hooks/useSlider";
import classes from "./Task.module.css";
import TaskSlider from "./TaskSlider";
import ListContext from "../../store/ListContext";

function Task({
  name,
  id,
  date,
  dateValue,
  listName,
  text,
  ListNameNotVisible,
}) {
  //set slider state
  const { boolean, toggleHandler } = useSlider(false);

  //get list context
  const { lists } = useContext(ListContext);

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
      <BsCalendar2XFill color="grey" />
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

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <label className={classes.label}>
          <input type="checkbox" />

          {name}
          <span className={classes.checkMark} />
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
