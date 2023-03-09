import React, { useContext } from "react";

import MainContainer from "../components/UI/Container/MainContainer";
import useSlider from "../hooks/useSlider";
import { displayDate } from "../utils/DateFunctions";
import TasksContext from "../store/TasksContext";
import TaskSlider from "../components/Tasks/TaskSlider";
import Task from "../components/Tasks/Task";

function AllTasks(props) {
  //get context and slider
  const { boolean, toggleHandler } = useSlider(false);
  const { tasks } = useContext(TasksContext);

  //filter tasks that are completed or trashed
  const tasksUncompleted = tasks
    .filter((task) => !task.completed)
    .filter((task) => !task.trashed);

  //sort by date
  const tasksSorted = tasksUncompleted.sort((a, b) => a.date < b.date);

  //render tasks
  const tasksRendered = tasksSorted.map((item) => (
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
        title="All Tasks"
        slider={<TaskSlider boolean={boolean} toggleHandler={toggleHandler} />}
        boolean={boolean}
        toggleHandler={toggleHandler}
        hasContent={tasks.length}
      >
        {tasksRendered}
      </MainContainer>
    </div>
  );
}

export default AllTasks;
