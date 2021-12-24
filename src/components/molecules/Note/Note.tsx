import React, { useState } from 'react';
import { RemoveNote } from '../RemoveNote/RemoveNote';
import { NoteSpan, NoteWrapper } from './Note.styled';
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
        <NoteSpan onClick={handleOnClick}>{note}</NoteSpan>
      )}
      <RemoveNote noteText={note} id={id} />
    </NoteWrapper>
  );
};
