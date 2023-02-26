import React from "react";
import { Link } from "react-router-dom";

import Input from "../UI/Input/Input";
import ActionButton from "../UI/Buttons/ActionButton";
import classes from "./Auth.module.css";

function ForgotPass(props) {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.container}>
      <h1>Sign In</h1>

      <form onSubmit={formSubmitHandler}>
        <Input name="email" auth={true} type="email" />
        <ActionButton type="submit" text="Send Code" />

        <p className={classes.paragraph}>
          Already have an account? <Link to="/welcome/sign-in">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPass;
