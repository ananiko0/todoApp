import React, { Fragment } from "react";

import SidebarHeader from "./SidebarHeader/SidebarHeader";
import classes from "./SideBar.module.css";
import useBoolean from "../../Hooks/useBoolean";

function SideBar(props) {
  const { boolean, toggle } = useBoolean(false);

  const toggleHandler = () => {
    if (window.innerWidth < 885) {
      if (!boolean) document.body.style.overflow = "hidden";
      if (boolean) document.body.style.overflow = "unset";
    }
    toggle();
  };

  return (
    <Fragment>
      <div className={boolean ? classes.container : classes.undisplayed}>
        <SidebarHeader boolean={boolean} toggle={toggleHandler} />
      </div>
    </Fragment>
  );
}

export default SideBar;
