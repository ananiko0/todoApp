import React, { useContext } from "react";
import { WiMoonFull } from "react-icons/wi";
import { useNavigate } from "react-router-dom";
import Randomstring from "randomstring";

import ListItem from "../../UI/LinkListItem/ListItem";
import classes from "./Lists.module.css";
import NewList from "./NewList";
import ListContext from "../../../store/ListContext";

function Lists(props) {
  const navigate = useNavigate();
  const { addList, lists } = useContext(ListContext);

  const submitHandler = (newItem) => {
    const path = `me/lists/${newItem.toLowerCase()}`;
    const newListItem = {
      name: newItem,
      icon: <WiMoonFull style={{ color: "rgb(91, 191, 222)" }} />,
      id: Randomstring.generate(),
      path,
    };
    addList(newListItem);
    navigate(path);
  };
  const list = lists.map((item) => (
    <ListItem
      text={item.name}
      icon={item.icon}
      path={item.path}
      key={item.id}
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
