import React from "react";
import Slider from "../../UI/Container/Slider";

import NewStickyNote from "./NewStickyNote";

function StickyNoteSlider({ title, text, color, toggleHandler, boolean }) {
  return (
    <Slider boolean={boolean} toggleHandler={toggleHandler}>
      <NewStickyNote
        toggle={toggleHandler}
        title={title}
        text={text}
        color={color}
      />
    </Slider>
  );
}

export default StickyNoteSlider;
