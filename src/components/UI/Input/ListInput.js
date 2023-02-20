import React from "react";

import listInfo from "../../sidebar/Lists/listInfo";
import classes from "./ListInput.module.css";

function ListInput({ value, onChange }) {
  const listOptions = listInfo.map((item) => (
    <option value={value} key={item.name} onChange={onChange}>
      {item.name}
    </option>
  ));
  return (
    <div className={classes.container}>
      <h6>List</h6>
      <select name="list" className={classes.select}>
        {listOptions}
      </select>
    </div>
  );
}

export default ListInput;
