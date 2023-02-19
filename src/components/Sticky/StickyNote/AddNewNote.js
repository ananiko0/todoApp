import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import NewStickyNote from "../NewStickyNote/NewStickyNote";
import Container from "../../UI/Container/Container";
import useSlider from "../../../hooks/useSlider";
import classes from "./AddNewNote.module.css";

function AddNewNote(props) {
  const { boolean, toggleHandler } = useSlider(false);

  return (
    <Fragment>
      <button className={classes.button} onClick={toggleHandler}>
        <AiOutlinePlus className={classes.icon} />
      </button>
      {boolean &&
        ReactDOM.createPortal(
          <Container
            toggle={toggleHandler}
            boolean={boolean}
            icon={<AiOutlineClose />}
            title="New Sticky Note"
          >
            <NewStickyNote />
          </Container>,
          document.getElementById("App")
        )}
    </Fragment>
  );
}

export default AddNewNote;
