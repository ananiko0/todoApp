import React from "react";
import { Link } from "react-router-dom";

import classes from "./ListItem.module.css";
function ListItem({ text, icon, number }) {
  return (
    <li>
      <Link className={classes.listItem}>
        <div className={classes.icon}>{icon}</div>
        <h6>{text}</h6>
      </Link>
    </li>
  );
}

export default ListItem;
