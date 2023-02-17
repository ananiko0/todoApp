import React from "react";

import classes from "./StickyNote.module.css";

function StickyNote({ title, text }) {
  return (
    <div className={classes.container}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default StickyNote;
