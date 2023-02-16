import React from "react";

import SidebarHeader from "./SidebarHeader/SidebarHeader";
import Tasks from "./Tasks/Tasks";
import Lists from "./Lists/Lists";
import Actions from "./Actions/Actions";
import classes from "./SideBar.module.css";
import useBoolean from "../../hooks/useBoolean";

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
    <div className={boolean ? classes.container : classes.undisplayed}>
      <SidebarHeader boolean={boolean} toggle={toggleHandler} />
      <div className={boolean ? classes.subContainer : classes.nondisplay}>
        <Tasks />
        <Lists />
        <Actions />
      </div>
    </div>
  );
}

export default SideBar;
