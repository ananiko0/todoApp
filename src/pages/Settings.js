import React from "react";

import MainContainer from "../components/UI/Container/MainContainer";
import EmailUpdate from "../components/Settings/EmailUpdate";
import PasswordUpdate from "../components/Settings/PasswordUpdate";

function Settings(props) {
  return (
    <MainContainer title="Settings" settings={true}>
      <EmailUpdate />
      <PasswordUpdate />
    </MainContainer>
  );
}

export default Settings;
