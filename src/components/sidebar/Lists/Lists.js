import React, { useContext } from "react";
import { WiMoonFull } from "react-icons/wi";
import { useNavigate } from "react-router-dom";
import Randomstring from "randomstring";

import ListItem from "../../UI/LinkListItem/ListItem";
import classes from "./Lists.module.css";
import NewList from "./NewList";
import ListContext from "../../../store/ListContext";

function Lists({ close }) {
  //get context and navigation
  const navigate = useNavigate();
  const { addList, lists } = useContext(ListContext);

  //add new list handler
  const submitHandler = (newItem) => {
    //set new list item
    const path = `me/lists/${newItem.toLowerCase()}`;
    const newListItem = {
      name: newItem,
      icon: <WiMoonFull style={{ color: "rgb(91, 191, 222)" }} />,
      id: Randomstring.generate(),
      path,
    };

    //update context
    addList(newListItem);

    //navigate to new list
    navigate(path);
  };

  //close side bar on mobile
  const clickHandler = () => {
    if (window.innerWidth < 885) {
      close();
    } else return;
  };

  //render lists
  const list = lists.map((item) => (
    <ListItem
      text={item.name}
      icon={<WiMoonFull color={item.color} />}
      path={item.path}
      key={item.id}
      onClick={clickHandler}
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
