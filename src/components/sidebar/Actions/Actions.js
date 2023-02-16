import React from "react";

import actionsInfo from "./actionsInfo";
import ListItem from "../../UI/LinkListItem/ListItem";

function Actions(props) {
  const actions = actionsInfo.map((item) => (
    <ListItem
      text={item.name}
      icon={item.icon}
      path={item.path}
      key={item.name}
    />
  ));
  return <div>{actions}</div>;
}

export default Actions;
