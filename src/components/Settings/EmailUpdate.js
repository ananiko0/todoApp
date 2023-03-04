import React from "react";

import Input from "../UI/Input/Input";
import ActionButton from "../UI/Buttons/ActionButton";
import classes from "./SettingsForm.module.css";

function EmailUpdate(props) {
  return (
    <form className={classes.form}>
      <h4>Update Email</h4>
      <Input
        name="Update Email"
        value="exampel@gmail.com"
        onChange={() => {}}
      />
      <ActionButton type="submit" text="Save Changes" />
    </form>
  );
}

export default EmailUpdate;
