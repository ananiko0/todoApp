import React from "react";

import Input from "../UI/Input/Input";
import ActionButton from "../UI/Buttons/ActionButton";
import useInput from "../../hooks/useInput";
import { validator } from "../../utils/validator";
import classes from "./SettingsForm.module.css";

function PasswordUpdate(props) {
  //set inputs
  const currentPassword = useInput(validator);
  const updatePassword = useInput(validator);
  const passwordRepeat = useInput(validator);
  return (
    <form className={classes.form}>
      <h4>update Password</h4>
      <Input
        name="Current Password"
        type="password"
        value={currentPassword.value}
        onChange={currentPassword.valueChangeHandler}
        hasError={currentPassword.hasError}
        errorText="Please enter a valid password"
        onBlur={currentPassword.inputBlurHandler}
      />
      <Input
        name="Update Password"
        type="password"
        value={updatePassword.value}
        onChange={updatePassword.valueChangeHandler}
        hasError={updatePassword.hasError}
        errorText="Please enter a valid password"
        onBlur={updatePassword.inputBlurHandler}
      />
      <Input
        name="Password Repeat"
        type="password"
        value={passwordRepeat.value}
        onChange={passwordRepeat.valueChangeHandler}
        hasError={passwordRepeat.hasError}
        errorText="Please enter a valid password"
        onBlur={passwordRepeat.inputBlurHandler}
      />
      <ActionButton type="submit" text="Save Changes" />
    </form>
  );
}

export default PasswordUpdate;
