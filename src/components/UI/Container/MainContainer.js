import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { GrChapterAdd } from "react-icons/gr";
import { ToastContainer } from "react-toastify";

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
      {ReactDOM.createPortal(
        <ToastContainer closeOnClick={false} closeButton={false} />,
        document.getElementById("root")
      )}
    </Fragment>
  );
}

export default MainContainer;
