import React, { useState } from "react";
import Randomstring from "randomstring";
import initialNotes from "../utils/lists/stickyList";

const StickyContext = React.createContext({
  stickyNotes: [],
  addNote: () => {},
  editNote: () => {},
  deleteNote: () => {},
});

export const StickyContextProvider = (props) => {
  const [stickyNotes, setStickyNotes] = useState(initialNotes);

  const addNote = (note) => {
    note.id = Randomstring.generate();
    setStickyNotes((prev) => [...prev, note]);
  };

  const removeNote = (id) => {
    setStickyNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    setStickyNotes((prev) => {
      const index = prev.findIndex((item) => item.id === note.id);
      prev[index] = note;
      return prev;
    });
  };

  const contextValue = {
    stickyNotes,
    addNote,
    removeNote,
    editNote,
  };

  return (
    <StickyContext.Provider value={contextValue}>
      {props.children}
    </StickyContext.Provider>
  );
};

export default StickyContext;
