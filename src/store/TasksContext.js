import React, { useState } from "react";
import Randomstring from "randomstring";
import initialTasks from "../utils/lists/taskList";

const TasksContext = React.createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  editTask: () => {},
  completeTask: () => {},
  uncompleteTask: () => {},
  removePermanently: () => {},
  restoreTask: () => {},
  deleteTasksByListName: () => {},
});

export const TasksContextProvider = (props) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    newTask.id = Randomstring.generate();
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      prev[index].trashed = true;
      return prev;
    });
  };

  const removePermanently = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    setTasks((prev) => {
      const index = prev.findIndex((item) => item.id === task.id);
      prev[index] = task;
      return prev;
    });
  };

  const completeTask = (id) => {
    setTasks((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      prev[index].completed = true;
      return prev;
    });
  };

  const uncompleteTask = (id) => {
    setTasks((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      prev[index].completed = false;
      return prev;
    });
  };

  const restoreTask = (id) => {
    setTasks((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      prev[index].trashed = false;
      return prev;
    });
  };

  const deleteTasksByListName = (name) => {
    setTasks((prev) => prev.filter((item) => item.list !== name));
    console.log("from task context");
  };

  const contextValue = {
    tasks,
    addTask,
    removeTask,
    editTask,
    completeTask,
    uncompleteTask,
    removePermanently,
    restoreTask,
    deleteTasksByListName,
  };
  return (
    <TasksContext.Provider value={contextValue}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
