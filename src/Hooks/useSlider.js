import useBoolean from "./useBoolean";

function useSlider(initialState) {
  const { boolean, toggle } = useBoolean(initialState);
  const toggleHandler = () => {
    if (window.innerWidth < 885) {
      if (!boolean) document.body.style.overflow = "hidden";
      if (boolean) document.body.style.overflow = "unset";
    }
    toggle();
  };
  return { boolean, toggleHandler };
}

export default useSlider;
