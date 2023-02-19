import React from "react";

import Task from "../components/UI/Buttons/Task";
import MainContainer from "../components/UI/Container/MainContainer";

function Today(props) {
  return (
    <div>
      <MainContainer title="Today">
        <Task name="go away and do everything" />
        <Task name="go away and do everything" />
        <Task name="go away and do everything" />
      </MainContainer>
    </div>
  );
}

export default Today;
