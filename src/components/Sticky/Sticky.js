import React, { Fragment } from "react";
import { GrChapterAdd } from "react-icons/gr";

import ActionButton from "../UI/Buttons/ActionButton";
import useSlider from "../../hooks/useSlider";
import StickyNoteInfo from "./StickyNoteInfo";
import StickyNote from "./StickyNote/StickyNote";
import classes from "./Sticky.module.css";
import StickyNoteSlider from "./NewStickyNote/StickySlider";

function Sticky(props) {
  const { boolean, toggleHandler } = useSlider(false);
  const stickyNotes = StickyNoteInfo.map((item) => (
    <StickyNote
      title={item.title}
      text={item.text}
      color={item.color}
      key={item.title + item.color}
    />
  ));

  return (
    <Fragment>
      <div className={classes.titleContainer}>
        <h2>Sticky Wall</h2>
        <ActionButton
          text={<GrChapterAdd />}
          type="edit"
          clickHandler={toggleHandler}
        />
        <StickyNoteSlider toggleHandler={toggleHandler} boolean={boolean} />
      </div>

      <div className={classes.container}>{stickyNotes}</div>
    </Fragment>
  );
}

export default Sticky;
