import { useCallback, useContext, useEffect } from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";

import SliderContext from "../store/SliderContext";

function useConfirmExit(confirmExit, when = true) {
  const { navigator } = useContext(NavigationContext);
  const { onClose } = useContext(SliderContext);

  useEffect(() => {
    if (!when) {
      return;
    }

    const push = navigator.push;

    navigator.push = (...args) => {
      const result = confirmExit();
      if (result !== false) {
        onClose();
        push(...args);
      }
    };

    return () => {
      navigator.push = push;
    };
  }, [navigator, confirmExit, when, onClose]);
}

export function usePrompt(message, when = true) {
  useEffect(() => {
    if (when) {
      window.onbeforeunload = function () {
        return message;
      };
    }

    return () => {
      window.onbeforeunload = null;
    };
  }, [message, when]);

  const confirmExit = useCallback(() => {
    const confirm = window.confirm(message);
    return confirm;
  }, [message]);
  useConfirmExit(confirmExit, when);
}
