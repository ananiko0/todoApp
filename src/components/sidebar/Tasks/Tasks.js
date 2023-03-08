import React, { useContext } from "react";

import taskInfo from "./taskInfo";
import ListItem from "../../UI/LinkListItem/ListItem";
import SliderContext from "../../../store/SliderContext";
import classes from "./Tasks.module.css";

function Tasks({ close }) {
  //get context of editing mode
  const { onClose } = useContext(SliderContext);

  //close side bar on mobile
  const clickHandler = () => {
    onClose();
    if (window.innerWidth < 885) {
      close();
    } else return;
  };

  //render tasks menu
  const tasks = taskInfo.map((item) => (
    <ListItem
      text={item.name}
      icon={item.icon}
      path={item.path}
      key={item.name}
      onClick={clickHandler}
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
