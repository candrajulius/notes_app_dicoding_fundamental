import React, { useContext } from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import LocaleContext from "../contexts/LocaleContext";
import { noteList } from "../utils/content";
const NoteList = ({ notes }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <>
      <div className='notes-list'>
        {notes.length ? (
          notes.map((note) => <NoteItem key={note.id} id={note.id} {...note} />)
        ) : (
          <p>{noteList[locale].contentNoteList}</p>
        )}
      </div>
    </>
  );
};
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default NoteList;
