import React, { Fragment } from "react";
import { GrChapterAdd } from "react-icons/gr";

import ActionButton from "../Buttons/ActionButton";
import classes from "./MainContainer.module.css";

function MainContainer({
  children,
  slider,
  title,
  toggleHandler,
  buttonNotVisible,
}) {
  const actionButton = !buttonNotVisible && (
    <ActionButton
      text={<GrChapterAdd />}
      type="edit"
      clickHandler={toggleHandler}
    />
  );
  return (
    <Fragment>
      <div className={classes.titleContainer}>
        <h2>{title}</h2>
        {actionButton}
        {slider}
      </div>
      <div className={classes.container}>{children}</div>
    </Fragment>
  );
}

export default MainContainer;
