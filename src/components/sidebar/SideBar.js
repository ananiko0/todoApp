import React, { Fragment } from "react";
import { HiOutlineMenu } from "react-icons/hi";

import useSlider from "../../hooks/useSlider";
import Container from "../UI/Container/Container";
import Tasks from "./Tasks/Tasks";
import Lists from "./Lists/Lists";
import Actions from "./Actions/Actions";
import classes from "./SideBar.module.css";

function SideBar(props) {
  //set sidebar state
  const { boolean, close, open } = useSlider(false, true);

  return (
    <Fragment>
      {!boolean && (
        <button onClick={open} className={classes.button}>
          <HiOutlineMenu />
        </button>
      )}
      <Container
        title="Menu"
        icon={<HiOutlineMenu />}
        boolean={boolean}
        toggle={close}
      >
        <Tasks close={close} />
        <Lists close={close} />
        <Actions close={close} />
      </Container>
    </Fragment>
  );
}

export default SideBar;
