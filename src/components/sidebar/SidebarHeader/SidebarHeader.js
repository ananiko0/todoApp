import React from "react";
import { motion } from "framer-motion";

import MenuIcon from "../../UI/Animations/MenuIcon";
import classes from "./SidebarHeader.module.css";

function SidebarHeader({ boolean, toggle }) {
  return (
    <div className={classes.container}>
      <h3>Menu</h3>
      <motion.div
        initial={false}
        animate={boolean ? "open" : "closed"}
        className={classes.button}
      >
        <MenuIcon toggle={toggle} />
      </motion.div>
    </div>
  );
}

export default SidebarHeader;
