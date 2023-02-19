import useBoolean from "./useBoolean";

function useSlider(initialState) {
  const { boolean, toggle, setTrue, setFalse } = useBoolean(initialState);
  const toggleHandler = () => {
    if (window.innerWidth < 885) {
      if (!boolean) document.body.style.overflow = "hidden";
      if (boolean) document.body.style.overflow = "unset";
    }
    toggle();
    console.log("toggle");
  };
  return { boolean, toggleHandler, setTrue, setFalse };
}

export default useSlider;
