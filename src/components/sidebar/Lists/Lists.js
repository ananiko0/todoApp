import React from "react";

import ListItem from "../../UI/LinkListItem/ListItem";
import listInfo from "./listInfo";
import classes from "./Lists.module.css";

function Lists(props) {
  const list = listInfo.map((item) => (
    <ListItem
      text={item.name}
      icon={item.icon}
      path={item.path}
      key={item.name}
    />
  ));
  return (
    <div className={classes.container}>
      <h5>LISTS</h5>
      <ul>{list}</ul>
    </div>
  );
}

export default Lists;
