import React, { useContext } from "react";

import useSlider from "../hooks/useSlider";
import TaskSlider from "../components/Tasks/TaskSlider";
import {
  filterToday,
  filterTomorrow,
  filterWeek,
} from "../utils/DateFunctions";
import Task from "../components/Tasks/Task";
import MainContainer from "../components/UI/Container/MainContainer";
import TasksContext from "../store/TasksContext";
import UpcomingContainer from "../components/UI/Container/UpcomingContainer";

function Upcoming(props) {
  //get tasks context, set state
  const { boolean, toggleHandler } = useSlider(false);
  const { tasks } = useContext(TasksContext);

  //filter tasks that are completed or trashed
  const tasksUncompleted = tasks
    .filter((task) => !task.completed)
    .filter((task) => !task.trashed);

  //filter according to date (today, tommorow and this week)
  const todayTasks = tasksUncompleted.filter((task) => filterToday(task.date));

  const tomorrowTasks = tasksUncompleted.filter((task) =>
    filterTomorrow(task.date)
  );

  const thisWeekTasks = tasksUncompleted.filter((task) =>
    filterWeek(task.date)
  );

  //render tasks by date
  const todayTasksRendered = todayTasks.map((item) => (
    <Task
      name={item.title}
      id={item.id}
      text={item.description}
      dateValue={item.date}
      listName={item.list}
      color={item.color}
      key={item.id}
    />
  ));

  const tomorrowTasksRendered = tomorrowTasks.map((item) => (
    <Task
      name={item.title}
      text={item.description}
      id={item.id}
      dateValue={item.date}
      listName={item.list}
      color={item.color}
      key={item.id}
    />
  ));

  const thisWeekTasksRendered = thisWeekTasks.map((item) => (
    <Task
      name={item.title}
      text={item.description}
      dateValue={item.date}
      id={item.id}
      listName={item.list}
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
