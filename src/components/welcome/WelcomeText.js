import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../UI/Buttons/ActionButton";
import classes from "./WelcomeText.module.css";

function WelcomeText(props) {
  const navigate = useNavigate();
  const getStartedHandler = () => {
    navigate("sign-up");
  };
  return (
    <div className={classes.container}>
      <h1>TO DO</h1>
      <h4>
        With all the features you need To Do is customized for individuals for a
        stress free planing and a lot of great other things. With all the
        features you need To Do is customized for individuals for a stress free
        planing and a lot of great other things
      </h4>
      <ActionButton
        type="submit"
        text="Get Started"
        clickHandler={getStartedHandler}
      />
      <h4>
        Alread have an account? <Link to="sign-in">Sign in</Link>
      </h4>
    </div>
  );
}

export default WelcomeText;
