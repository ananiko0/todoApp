import React from "react";

import taskInfo from "./taskInfo";
import ListItem from "../../UI/LinkListItem/ListItem";
import classes from "./Tasks.module.css";

function Tasks(props) {
  //render tasks menu
  const tasks = taskInfo.map((item) => (
    <ListItem
      text={item.name}
      icon={item.icon}
      path={item.path}
      key={item.name}
    />
  ));
  return (
    <div className={classes.container}>
      <h5>TASKS</h5>
      <ul>{tasks}</ul>
    </div>
  );
}

export default Tasks;
