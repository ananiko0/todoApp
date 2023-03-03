import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import Task from "../components/Tasks/Task";
import { displayDate } from "../utils/DateFunctions";
import MainContainer from "../components/UI/Container/MainContainer";
import TaskSlider from "../components/Tasks/TaskSlider";
import useSlider from "../hooks/useSlider";
import TasksContext from "../store/TasksContext";

function List(props) {
  const { boolean, toggleHandler } = useSlider(false);
  let { listName } = useParams();
  const { tasks } = useContext(TasksContext);
  const tasksFiltered = tasks.filter((task) => task.list === listName);
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
      >
        {tasksRendered}
      </MainContainer>
    </div>
  );
}

export default List;
