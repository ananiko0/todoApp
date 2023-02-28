import React, { useState } from "react";
import Randomstring from "randomstring";
import initialTasks from "../utils/lists/taskList";

const TasksContext = React.createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  editTask: () => {},
});

export const TasksContextProvider = (props) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    newTask.id = Randomstring.generate();
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (removedTask) => {
    setTasks((prev) => prev.filter((task) => task.id !== removedTask.id));
  };

  const editTask = () => {};

  const contextValue = {
    tasks,
    addTask,
    removeTask,
    editTask,
  };
  return (
    <TasksContext.Provider value={contextValue}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
