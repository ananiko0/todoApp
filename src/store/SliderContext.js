import React from "react";
import useBoolean from "../hooks/useBoolean";

const SliderContext = React.createContext({
  sliderOpen: false,
});

export const SliderContextProvider = (props) => {
  const { boolean, setTrue, setFalse, toggle } = useBoolean(false);

  const contextValue = {
    sliderOpen: boolean,
    onOpen: setTrue,
    onClose: setFalse,
    onToggle: toggle,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      {props.children}
    </SliderContext.Provider>
  );
};

export default SliderContext;
