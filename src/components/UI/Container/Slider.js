import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import Container from "../../UI/Container/Container";

function Slider({ children, boolean, toggleHandler, title }) {
  return (
    <Fragment>
      {boolean &&
        ReactDOM.createPortal(
          <Container
            toggle={toggleHandler}
            boolean={boolean}
            icon={<AiOutlineClose />}
            title={title}
          >
            {children}
          </Container>,
          document.getElementById("App")
        )}
    </Fragment>
  );
}

export default Slider;
