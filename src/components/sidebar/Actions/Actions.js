import React, { useContext } from "react";
import {
  HiAdjustmentsHorizontal,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/AuthContext";
import classes from "../../UI/LinkListItem/ListItem.module.css";

import ListItem from "../../UI/LinkListItem/ListItem";

function Actions({ close }) {
  //get logout function from context and navigation
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  //logout hanlder
  const signOutHandler = () => {
    logout();
    navigate("/welcome");
  };

  //close side bar on mobile
  const clickHandler = () => {
    if (window.innerWidth < 885) {
      close();
    } else return;
  };

  return (
    <div>
      <ListItem
        text="Settings"
        icon={<HiAdjustmentsHorizontal />}
        path="/me/settings"
        onClick={clickHandler}
      />

      <button onClick={signOutHandler} className={classes.listItem}>
        <div className={classes.icon}>
          <HiOutlineArrowRightOnRectangle />
        </div>

        <h6>sign out</h6>
      </button>
    </div>
  );
}

export default Actions;
