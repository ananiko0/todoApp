import React, { useState } from "react";

import listInfoInitial from "../utils/lists/listsList";

const ListContext = React.createContext({
  lists: [],
  addList: () => {},
  removeList: () => {},
});

export const ListContextProvider = (props) => {
  const [lists, setLists] = useState(listInfoInitial);

  const addList = (newList) => {
    setLists((prev) => [...prev, newList]);
  };
  const removeList = (id) => {
    setLists((prev) => prev.filter((listName) => listName.id !== id));
  };

  const value = {
    lists,
    addList,
    removeList,
  };
  return (
    <ListContext.Provider value={value}>{props.children}</ListContext.Provider>
  );
};

export default ListContext;
