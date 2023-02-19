import React, { Fragment } from "react";
import classes from "./Container.module.css";

function Container({ title, children, icon, boolean, toggle }) {
  return (
    <Fragment>
      {boolean && (
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            <h3>{title}</h3>
            <button className={classes.button} onClick={toggle}>
              {icon}
            </button>
          </div>
          <div className={classes.main}>{children}</div>
        </div>
      )}
    </Fragment>
  );
}

export default Container;
