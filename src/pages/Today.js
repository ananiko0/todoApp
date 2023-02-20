import React from "react";

import taskInfo from "../utils/taskInfo";
import useSlider from "../hooks/useSlider";
import Task from "../components/Tasks/Task";
import MainContainer from "../components/UI/Container/MainContainer";
import TaskSlider from "../components/Tasks/TaskSlider";

function Today(props) {
  const { boolean, toggleHandler } = useSlider(false);

  const tasks = taskInfo.map((item) => (
    <Task
      name={item.name}
      description={item.description}
      date={item.date}
      listName={item.listName}
      color={item.color}
      key={item.name + item.date + item.color}
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
        {tasks}
      </MainContainer>
    </div>
  );
}

export default Today;
