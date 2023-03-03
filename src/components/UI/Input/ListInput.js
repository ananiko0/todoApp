import React from "react";

import listInfo from "../../sidebar/Lists/listInfo";
import classes from "./ListInput.module.css";

function ListInput({ value, onChange }) {
  const listOptions = listInfo.map((item, index) => {
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
