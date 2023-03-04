import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import TasksContext from "../store/TasksContext";
import { displayDate } from "../utils/DateFunctions";
import Task from "../components/Tasks/Task";
import MainContainer from "../components/UI/Container/MainContainer";
import TaskSlider from "../components/Tasks/TaskSlider";
import useSlider from "../hooks/useSlider";

function List(props) {
  //get task context, params and set state
  const { boolean, toggleHandler } = useSlider(false);
  let { listName } = useParams();
  const { tasks } = useContext(TasksContext);

  //filter task by listname
  const tasksFiltered = tasks.filter((task) => task.list === listName);

  //render tasks
  const tasksRendered = tasksFiltered.map((item) => (
    <Task
      name={item.title}
      id={item.id}
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
        title={listName}
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
