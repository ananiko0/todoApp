import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./ListItem.module.css";
function ListItem({ text, icon, number, path, onClick }) {
  return (
    <li>
      <NavLink
        onClick={onClick}
        className={(navData) =>
          navData.isActive ? classes.active : classes.listItem
        }
        to={path}
      >
        <div className={classes.icon}>{icon}</div>
        <h6>{text}</h6>
      </NavLink>
    </li>
  );
}

export default ListItem;
