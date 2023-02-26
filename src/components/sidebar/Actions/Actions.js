import React, { useContext } from "react";
import {
  HiAdjustmentsHorizontal,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/AuthContext";
import classes from "../../UI/LinkListItem/ListItem.module.css";

import ListItem from "../../UI/LinkListItem/ListItem";

function Actions(props) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const signOutHandler = () => {
    console.log("signout");
    logout();
    navigate("/welcome");
  };

  return (
    <div>
      <ListItem
        text="Settings"
        icon={<HiAdjustmentsHorizontal />}
        path="/me/settings"
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
