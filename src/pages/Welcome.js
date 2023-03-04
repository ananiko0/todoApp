import React from "react";
import { Outlet } from "react-router-dom";
import classes from "../components/UI/Container/WelcomeContainer.module.css";

import WelcomeImage from "../components/welcome/WelcomeImage";
function Welcome(props) {
  return (
    <div className={classes.container}>
      <WelcomeImage />
      <Outlet />
    </div>
  );
}

export default Welcome;
