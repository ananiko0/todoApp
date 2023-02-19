import React from "react";
import { AiFillEdit } from "react-icons/ai";

import StickyNoteSlider from "../NewStickyNote/StickySlider";
import ActionButton from "../../UI/Buttons/ActionButton";
import useSlider from "../../../hooks/useSlider";
import classes from "./StickyNote.module.css";

function StickyNote({ title, text, color, children }) {
  const { boolean, toggleHandler } = useSlider(false);

  return (
    <div className={classes.container} style={{ backgroundColor: color }}>
      <div className={classes.textContainer}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <ActionButton
        text={<AiFillEdit />}
        type="edit"
        clickHandler={toggleHandler}
      />
      <StickyNoteSlider
        title={title}
        text={text}
        color={color}
        toggleHandler={toggleHandler}
        boolean={boolean}
      />
    </div>
  );
}

export default StickyNote;
