import React, { useContext } from "react";

import useSlider from "../hooks/useSlider";
import { displayDate, filterToday } from "../utils/DateFunctions";
import Task from "../components/Tasks/Task";
import MainContainer from "../components/UI/Container/MainContainer";
import TaskSlider from "../components/Tasks/TaskSlider";
import TasksContext from "../store/TasksContext";

function Today(props) {
  const { boolean, toggleHandler } = useSlider(false);
  const { tasks } = useContext(TasksContext);

  const tasksFiltered = tasks.filter((task) => filterToday(task.date));

  const tasksRendered = tasksFiltered.map((item) => (
    <Task
      name={item.title}
      description={item.description}
      date={displayDate(item.date)}
      listName={item.list}
      color={item.color}
      key={item.id}
    />
  ));

  return (
    <div>
      <MainContainer
        title="Today"
        slider={<TaskSlider boolean={boolean} toggleHandler={toggleHandler} />}
        boolean={boolean}
        toggleHandler={toggleHandler}
      >
        {tasksRendered}
      </MainContainer>
    </div>
  );
}

export default Today;
