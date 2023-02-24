import React, { useState } from "react";
import { WiMoonFull } from "react-icons/wi";

import ListItem from "../../UI/LinkListItem/ListItem";
import listInfo from "./listInfo";
import classes from "./Lists.module.css";
import NewList from "./NewList";

function Lists(props) {
  const [listArr, setListArr] = useState(listInfo);

  const submitHandler = (newItem) => {
    const path = `/${newItem.toLowerCase()}`;
    const newListItem = {
      name: newItem,
      icon: <WiMoonFull style={{ color: "rgb(91, 191, 222)" }} />,
      path,
    };
    setListArr((prev) => [...prev, newListItem]);
  };
  const list = listArr.map((item) => (
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
      <ul>
        {list}
        <NewList onSubmit={submitHandler} />
      </ul>
    </div>
  );
}

export default Lists;
