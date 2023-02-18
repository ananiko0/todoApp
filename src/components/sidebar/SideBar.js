import React, { Fragment } from "react";
import { HiOutlineMenu } from "react-icons/hi";

import useSlider from "../../hooks/useSlider";
import Container from "../UI/Container/Container";
import Tasks from "./Tasks/Tasks";
import Lists from "./Lists/Lists";
import Actions from "./Actions/Actions";
import classes from "./SideBar.module.css";

function SideBar(props) {
  const { boolean, toggleHandler } = useSlider(false);

  return (
    <Fragment>
      {!boolean && (
        <button onClick={toggleHandler} className={classes.button}>
          <HiOutlineMenu />
        </button>
      )}
      <Container
        title="Menu"
        icon={<HiOutlineMenu />}
        boolean={boolean}
        toggle={toggleHandler}
      >
        <Tasks />
        <Lists />
        <Actions />
      </Container>
    </Fragment>
  );
}

export default SideBar;
