import React from "react";

import EditTask from "./EditTask";
import Slider from "../UI/Container/Slider";
function TaskSlider({
  title,
  id,
  text,
  date,
  dateValue,
  listName,
  toggleHandler,
  boolean,
}) {
  return (
    <Slider boolean={boolean} toggleHandler={toggleHandler} title="Task:">
      <EditTask
        toggle={toggleHandler}
        id={id}
        title={title}
        text={text}
        date={date}
        listName={listName}
        dateValue={dateValue}
      />
    </Slider>
  );
}

export default TaskSlider;
