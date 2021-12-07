import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNotes } from '../../../store/store';
import { createUserNotesEdit } from '../../../healpers/createUserNotesEdit';
import { IUser } from '../../../store/stateInterface';
import axios from 'axios';

interface INoteProps {
  handleCloseEditing(): void;
  note: string;
  id: string;
  index: number;
}

export const EditNoteForm = ({ handleCloseEditing, note, id, index }: INoteProps) => {
  const [textareaValue, setTextareaValue] = useState<string>(note);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: { user: IUser }) => state.user);

  const handleOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => setTextareaValue(e.currentTarget.value);

  const handleOnSubmit = async () => {
    const newUserNotes = createUserNotesEdit(user.notes, id, textareaValue, index);
    try {
      if (textareaValue !== note) {
        dispatch(updateNotes(newUserNotes));
        handleCloseEditing();
        const { data } = await axios.post('/.netlify/functions/notes', {
          data: { newUserNotes, user },
        });
        if (data.error) throw new Error(data.error);
      } else {
        handleCloseEditing();
      }
    } catch (error) {
      //handle error
    }
  };

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleOnSubmit} onBlur={handleOnSubmit}>
      <textarea ref={textareaRef} value={textareaValue} onChange={handleOnChange} />
    </form>
  );
};
