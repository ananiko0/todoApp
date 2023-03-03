import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import ActionButton from "../UI/Buttons/ActionButton";
import Input from "../UI/Input/Input";
import classes from "./Auth.module.css";

function SignIn(props) {
  //get contexts
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  //log in function
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
        <ActionButton type="submit" text="sign in" />

        <p className={classes.paragraph}>
          Forgot Password?{" "}
          <Link to="/welcome/forgot-password">Forgot Password</Link>
        </p>
        <p className={classes.paragraph}>
          Dont't have an account? <Link to="/welcome/sign-up">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
