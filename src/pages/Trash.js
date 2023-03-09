import React, { useContext } from "react";
import TasksContext from "../store/TasksContext";

import MainContainer from "../components/UI/Container/MainContainer";
import Task from "../components/Tasks/Task";
import { displayDate } from "../utils/DateFunctions";

function Trash(props) {
  const { tasks } = useContext(TasksContext);

  //filter tasks that are completed
  const tasksTrashed = tasks.filter((task) => task.trashed);

  const tasksRendered = tasksTrashed.map((item) => (
    <Task
      name={item.title}
      id={item.id}
      trashed={item.trashed}
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
        title="Trash"
        buttonNotVisible={true}
        hasContent={tasksTrashed.length}
      >
        {tasksRendered}
      </MainContainer>
    </div>
  );
}

export default Trash;
