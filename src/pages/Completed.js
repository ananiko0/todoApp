import React, { useContext } from "react";
import TasksContext from "../store/TasksContext";

import MainContainer from "../components/UI/Container/MainContainer";
import Task from "../components/Tasks/Task";
import { displayDate } from "../utils/DateFunctions";

function Completed(props) {
  const { tasks } = useContext(TasksContext);

  //filter tasks that are completed
  const tasksCompleted = tasks.filter((task) => task.completed);

  const tasksRendered = tasksCompleted.map((item) => (
    <Task
      name={item.title}
      id={item.id}
      completed={item.completed}
      text={item.description}
      date={displayDate(item.date)}
      dateValue={item.date}
      listName={item.list}
      ListNameNotVisible={true}
      color={item.color}
      key={item.id}
    />
  ));
  return (
    <div>
      <MainContainer
        title="Completed"
        buttonNotVisible={true}
        hasContent={tasksCompleted.length}
      >
        {tasksRendered}
      </MainContainer>
    </div>
  );
}

export default Completed;
