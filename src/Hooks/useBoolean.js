import { useState } from "react";

function useBoolean(initialState) {
  const [boolean, setBoolean] = useState(initialState);

  const setTrue = () => {
    setBoolean(true);
  };
  const setFalse = () => {
    setBoolean(false);
  };
  const toggle = () => {
    setBoolean((prev) => !prev);
  };
  return {
    boolean,
    setTrue,
    setFalse,
    toggle,
  };
}

export default useBoolean;
