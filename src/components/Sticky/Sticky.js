import React, { Fragment, useContext } from "react";
import { GrChapterAdd } from "react-icons/gr";

import ActionButton from "../UI/Buttons/ActionButton";
import useSlider from "../../hooks/useSlider";
// import StickyNoteInfo from "./StickyNoteInfo";
import StickyNote from "./StickyNote/StickyNote";
import classes from "./Sticky.module.css";
import StickyNoteSlider from "./NewStickyNote/StickySlider";
import StickyContext from "../../store/StickyContext";

function Sticky(props) {
  //get contexts and set slider state
  const { boolean, toggleHandler } = useSlider(false);
  const { stickyNotes } = useContext(StickyContext);

  //render stikcy notes
  const stickyNotesDisplay = stickyNotes.map((item) => (
    <StickyNote
      title={item.title}
      text={item.text}
      color={item.color}
      id={item.id}
      key={item.id}
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

      <div className={classes.container}>{stickyNotesDisplay}</div>
    </Fragment>
  );
}

export default Sticky;
