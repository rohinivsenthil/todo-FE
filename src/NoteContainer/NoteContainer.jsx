import React from 'react';
import propTypes from 'prop-types';
import NoteCard from '../NoteCard/NoteCard';
import './NoteContainer.css';

const NoteContainer = (props) => {
  const { noteList, deleteNote } = props;
  const notes = [...noteList].reverse().map((note) => (
    <NoteCard
      key={note.noteId}
      text={note.description}
      id={note.noteId}
      deleteNote={(noteId) => deleteNote(noteId)}
    />
  ));
  return (
    <div className="NoteContainer">
      {notes}
    </div>
  );
};

NoteContainer.propTypes = {
  noteList: propTypes.arrayOf(propTypes.object).isRequired,
  deleteNote: propTypes.func.isRequired,
};

export default NoteContainer;
