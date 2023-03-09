import useBoolean from "./useBoolean";
import { useContext } from "react";

import SliderContext from "../store/SliderContext";
// import useCallbackPrompt from "./useCallbackPrompt";
import { toast } from "react-toastify";

function useSlider(initialState, sideBar) {
  const { boolean, toggle, setTrue, setFalse } = useBoolean(initialState);

  //get slider context (so several tasks can not be edited at once)
  const sliderCtx = useContext(SliderContext);

  //toggle so overflow becomes hidden according when window is small
  const toggleHandler = () => {
    if (sliderCtx.sliderOpen !== boolean) {
      // console.log("editing");
      toast("can't edit two tasks at the same time");
      // showPrompt && prompt("you are editing");
      return;
    }
    if (window.innerWidth < 885) {
      if (!boolean) document.body.style.overflow = "hidden";
      if (boolean) document.body.style.overflow = "unset";
    }
    toggle();
    !sideBar && sliderCtx.onToggle();
  };

  const open = () => {
    if (window.innerWidth < 885) {
      document.body.style.overflow = "hidden";
    }
    setTrue();
    !sideBar && sliderCtx.onOpen();
  };

  const close = () => {
    if (window.innerWidth < 885) {
      document.body.style.overflow = "unset";
    }
    setFalse();
    !sideBar && sliderCtx.onClose();
  };

  return { boolean, toggleHandler, open, close };
}

export default useSlider;
