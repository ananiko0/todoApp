import React, { useContext } from "react";

import useSlider from "../hooks/useSlider";
import { displayDate, filterToday } from "../utils/DateFunctions";
import Task from "../components/Tasks/Task";
import MainContainer from "../components/UI/Container/MainContainer";
import TaskSlider from "../components/Tasks/TaskSlider";
import TasksContext from "../store/TasksContext";

function Today(props) {
  //set state and get tasks context
  const { boolean, toggleHandler } = useSlider(false);
  const { tasks } = useContext(TasksContext);

  //filter tasks that are completed
  const tasksUncompleted = tasks
    .filter((task) => !task.completed)
    .filter((task) => !task.trashed);

  //filter tasks by date
  const tasksFiltered = tasksUncompleted.filter((task) =>
    filterToday(task.date)
  );

  //render tasks
  const tasksRendered = tasksFiltered.map((item) => (
    <Task
      name={item.title}
      id={item.id}
      text={item.description}
      date={displayDate(item.date)}
      dateValue={item.date}
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
        hasContent={tasksFiltered.length}
      >
        {tasksRendered}
      </MainContainer>
    </div>
  );
}

export default Today;
