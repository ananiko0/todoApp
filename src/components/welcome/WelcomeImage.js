import React from "react";
import classes from "./WelcomeImage.module.css";

function WelcomeImage(props) {
  return (
    <div className={classes.container}>
      <h1>TODO</h1>
      <img
        src={require("../../assets/images/landingPage.png")}
        alt="abstract"
      />
    </div>
  );
}

export default WelcomeImage;
