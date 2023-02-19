import React, { Fragment } from "react";

import StickyNoteInfo from "./StickyNoteInfo";
import StickyNote from "./StickyNote/StickyNote";
import AddNewNote from "./StickyNote/AddNewNote";
import classes from "./Sticky.module.css";

const stickyNotes = StickyNoteInfo.map((item) => (
  <StickyNote
    title={item.title}
    text={item.text}
    color={item.color}
    key={item.title + item.color}
  />
));
function Sticky(props) {
  return (
    <Fragment>
      <h2>Sticky Wall</h2>
      <div className={classes.container}>
        {stickyNotes}
        <StickyNote color="rgb(226 226 226)">
          <AddNewNote />
        </StickyNote>
      </div>
    </Fragment>
  );
}

export default Sticky;
