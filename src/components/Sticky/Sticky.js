import React, { Fragment } from "react";

import StickyNote from "./StickyNote/StickyNote";
import classes from "./Sticky.module.css";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum vehicula estLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum vehicula estLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum vehicula est";

function Sticky(props) {
  return (
    <Fragment>
      <h2>Sticky Wall</h2>
      <div className={classes.container}>
        <StickyNote title={"Social"} text={text} />
        <StickyNote title={"Social"} text={text} />
        <StickyNote title={"Social"} text={text} />
        <StickyNote title={"Social"} text={text} />
      </div>
    </Fragment>
  );
}

export default Sticky;
