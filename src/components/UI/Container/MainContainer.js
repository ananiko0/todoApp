import React, { Fragment } from "react";
import { act } from "react-dom/test-utils";
import { GrChapterAdd } from "react-icons/gr";

import ActionButton from "../Buttons/ActionButton";
import classes from "./MainContainer.module.css";

function MainContainer({
  children,
  slider,
  title,
  toggleHandler,
  boolean,
  settings,
}) {
  const actionButton = !settings && (
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
