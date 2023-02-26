import React from "react";
import { Outlet } from "react-router-dom";

import WelcomeImage from "../components/welcome/WelcomeImage";
function Welcome(props) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <WelcomeImage />
      <Outlet />
    </div>
  );
}

export default Welcome;
