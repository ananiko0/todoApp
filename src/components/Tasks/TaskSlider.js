import React from "react";

import EditTask from "./EditTask";
import Slider from "../UI/Container/Slider";
function TaskSlider({ title, text, date, listName, toggleHandler, boolean }) {
  return (
    <Slider boolean={boolean} toggleHandler={toggleHandler} title="Task:">
      <EditTask
        toggle={toggleHandler}
        title={title}
        text={text}
        date={date}
        listName={listName}
      />
    </Slider>
  );
}

export default TaskSlider;
