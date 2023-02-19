import useBoolean from "./useBoolean";
import { useContext } from "react";

import SliderContext from "../store/SliderContext";

function useSlider(initialState) {
  const { boolean, toggle, setTrue, setFalse } = useBoolean(initialState);
  const sliderCtx = useContext(SliderContext);
  const toggleHandler = () => {
    if (sliderCtx.sliderOpen !== boolean) return;
    if (window.innerWidth < 885) {
      if (!boolean) document.body.style.overflow = "hidden";
      if (boolean) document.body.style.overflow = "unset";
    }
    toggle();
    sliderCtx.onToggle();
  };
  return { boolean, toggleHandler, setTrue, setFalse };
}

export default useSlider;
