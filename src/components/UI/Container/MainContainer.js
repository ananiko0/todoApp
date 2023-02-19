import React, { Fragment } from "react";
import { GrChapterAdd } from "react-icons/gr";

import ActionButton from "../Buttons/ActionButton";
import classes from "./MainContainer.module.css";

function MainContainer({ children, slider, title, toggleHandler, boolean }) {
  return (
    <Fragment>
      <div className={classes.titleContainer}>
        <h2>{title}</h2>
        <ActionButton
          text={<GrChapterAdd />}
          type="edit"
          clickHandler={toggleHandler}
        />
        {slider}
      </div>
      <div className={classes.container}>{children}</div>
    </Fragment>
  );
}

export default MainContainer;
