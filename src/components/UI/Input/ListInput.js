import React, { useContext } from "react";
import ListContext from "../../../store/ListContext";

import classes from "./ListInput.module.css";

function ListInput({ value, onChange }) {
  const { lists } = useContext(ListContext);
  const listOptions = lists.map((item, index) => {
    return (
      <option value={item.name.toLocaleLowerCase()} key={item.name}>
        {item.name}
      </option>
    );
  });

  return (
    <div className={classes.container}>
      <h6>List</h6>
      <select
        name="list"
        className={classes.select}
        value={value}
        onChange={onChange}
      >
        <option value="none">none</option>
        {listOptions}
      </select>
    </div>
  );
}

export default ListInput;
