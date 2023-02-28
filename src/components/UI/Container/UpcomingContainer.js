import React from "react";

import classes from "./UpcomingContainer.module.css";

function UpcomingContainer({ children, title }) {
  return (
    <div className={classes.container}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default UpcomingContainer;
