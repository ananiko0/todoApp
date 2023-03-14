import React, { useContext, useState } from "react";

import listInfoInitial from "../utils/lists/listsList";
import TasksContext from "./TasksContext";

const ListContext = React.createContext({
  lists: [],
  addList: () => {},
  removeList: () => {},
  updateColor: () => {},
});

export const ListContextProvider = (props) => {
  const [lists, setLists] = useState(listInfoInitial);
  const { deleteTasksByListName } = useContext(TasksContext);

  const addList = (newList) => {
    setLists((prev) => [...prev, newList]);
  };
  const removeList = (name) => {
    setLists((prev) =>
      prev.filter((listName) => listName.name.toLowerCase() !== name)
    );
    deleteTasksByListName(name);
  };

  const updateColor = (color, name) => {
    setLists((prev) => {
      const index = prev.findIndex((item) => item.name.toLowerCase() === name);
      prev[index].color = color;
      return prev;
    });
  };

  const value = {
    lists,
    addList,
    removeList,
    updateColor,
  };
  return (
    <ListContext.Provider value={value}>{props.children}</ListContext.Provider>
  );
};

export default ListContext;
