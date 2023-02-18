import React from "react";

import Input from "../../UI/Input/Input";
import classes from "./NewStickyNote.module.css";

function NewStickyNote(props) {
  return (
    <form className={classes.container}>
      <Input name="Title" height="19px" />
      <Input name="description" height="100px" />
    </form>
  );
}

export default NewStickyNote;
