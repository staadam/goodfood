import React, { useState } from 'react';
import { RemoveNote } from '../RemoveNote/RemoveNote';
import { NoteWrapper } from './Note.styled';
import { EditNoteForm } from '../EditNoteForm/EditNoteForm';

interface INoteProps {
  note: string;
  id: string;
  index: number;
}

export const Note = ({ note, id, index }: INoteProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleOnClick = () => setIsEditing(true);

  const handleCloseEditing = () => setIsEditing(false);

  return (
    <NoteWrapper>
      {isEditing ? (
        <EditNoteForm handleCloseEditing={handleCloseEditing} note={note} id={id} index={index} />
      ) : (
        <span onClick={handleOnClick}> {note}</span>
      )}
      <RemoveNote noteText={note} id={id} />
    </NoteWrapper>
  );
};
