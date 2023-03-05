import React, { useContext } from "react";

import MainContainer from "../UI/Container/MainContainer";
import useSlider from "../../hooks/useSlider";
// import StickyNoteInfo from "./StickyNoteInfo";
import StickyNote from "./StickyNote/StickyNote";
import StickyNoteSlider from "./NewStickyNote/StickySlider";
import StickyContext from "../../store/StickyContext";
import classes from "./Sticky.module.css";

function Sticky(props) {
  //get contexts and set slider state
  const { boolean, toggleHandler } = useSlider(false);
  const { stickyNotes } = useContext(StickyContext);

  //render stikcy notes
  const stickyNotesDisplay = stickyNotes.map((item) => (
    <StickyNote
      title={item.title}
      text={item.text}
      color={item.color}
      id={item.id}
      key={item.id}
    />
  ));

  return (
    <div>
      <MainContainer
        title="Sticky Wall"
        slider={
          <StickyNoteSlider boolean={boolean} toggleHandler={toggleHandler} />
        }
        boolean={boolean}
        toggleHandler={toggleHandler}
      >
        <div className={classes.container}>{stickyNotesDisplay}</div>
      </MainContainer>
    </div>
  );
}

export default Sticky;
