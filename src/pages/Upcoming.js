import React, { useContext } from "react";

import useSlider from "../hooks/useSlider";
import TaskSlider from "../components/Tasks/TaskSlider";
import {
  displayDate,
  filterToday,
  filterTomorrow,
  filterWeek,
} from "../utils/DateFunctions";
import Task from "../components/Tasks/Task";
import MainContainer from "../components/UI/Container/MainContainer";
import TasksContext from "../store/TasksContext";
import UpcomingContainer from "../components/UI/Container/UpcomingContainer";

function Upcoming(props) {
  const { boolean, toggleHandler } = useSlider(false);
  const { tasks } = useContext(TasksContext);

  const todayTasks = tasks.filter((task) => filterToday(task.date));

  const tomorrowTasks = tasks.filter((task) => filterTomorrow(task.date));

  const thisWeekTasks = tasks.filter((task) => filterWeek(task.date));

  const todayTasksRendered = todayTasks.map((item) => (
    <Task
      name={item.title}
      description={item.description}
      // date={displayDate(item.date)}
      listName={item.list}
      color={item.color}
      key={item.id}
    />
  ));

  const tomorrowTasksRendered = tomorrowTasks.map((item) => (
    <Task
      name={item.title}
      description={item.description}
      // date={displayDate(item.date)}
      listName={item.list}
      color={item.color}
      key={item.id}
    />
  ));

  const thisWeekTasksRendered = thisWeekTasks.map((item) => (
    <Task
      name={item.title}
      description={item.description}
      // date={displayDate(item.date)}
      // listName={item.list}
      color={item.color}
      key={item.id}
    />
  ));

  return (
    <div>
      <MainContainer
        title="Upcoming"
        slider={<TaskSlider boolean={boolean} toggleHandler={toggleHandler} />}
        boolean={boolean}
        toggleHandler={toggleHandler}
      >
        <UpcomingContainer title="Today">
          {todayTasksRendered}
        </UpcomingContainer>
        <UpcomingContainer title="Tomorrow">
          {tomorrowTasksRendered}
        </UpcomingContainer>
        <UpcomingContainer title="This Week">
          {thisWeekTasksRendered}
        </UpcomingContainer>
      </MainContainer>
    </div>
  );
}

export default Upcoming;
