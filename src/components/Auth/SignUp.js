import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import ActionButton from "../UI/Buttons/ActionButton";
import Input from "../UI/Input/Input";
import classes from "./Auth.module.css";

function SignUp(props) {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    login();
    navigate("/me/today");
  };
  return (
    <div className={classes.container}>
      <h1>Sign In</h1>

      <form onSubmit={formSubmitHandler}>
        <Input name="email" auth={true} type="email" />
        <Input name="password" auth={true} type="password" />
        <Input name="password repeat" auth={true} type="password" />
        <ActionButton type="submit" text="sign up" />

        <p className={classes.paragraph}>
          Already have an account? <Link to="/welcome/sign-in">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
