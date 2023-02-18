import React from "react";

import classes from "./StickyNote.module.css";

function StickyNote({ title, text, color, children }) {
  return (
    <div className={classes.container} style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </div>
  );
}

export default StickyNote;
