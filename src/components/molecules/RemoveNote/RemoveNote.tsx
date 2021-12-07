import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CancelButton } from '../../atoms/Button/Button';
import { removeNote } from '../../../store/store';
import axios from 'axios';
import { INote, IUser } from '../../../store/stateInterface';

const createNewUserNotesArray = (
  currentUserNotes: Array<INote>,
  mealID: string,
  removeNoteContent: string
): Array<INote> => {
  const mealNotes = currentUserNotes.find((mealNote) => mealNote.mealID === mealID);
  const newMealNotes = mealNotes?.notes.filter((noteContent) => noteContent !== removeNoteContent) || [];

  if (newMealNotes.length > 0) {
    return [...currentUserNotes.filter((note) => note.mealID !== mealID), { mealID, notes: newMealNotes }];
  }
  return [...currentUserNotes.filter((note) => note.mealID !== mealID)];
};

export const RemoveNote = ({ noteText, id }: { noteText: string; id: string }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: { user: IUser }) => state.user);

  const handleRemoveNote = async () => {
    try {
      const newUserNotes = createNewUserNotesArray(user.notes, id, noteText);
      dispatch(removeNote(newUserNotes));
      const { data } = await axios.post('/.netlify/functions/notes', {
        data: { newUserNotes, user },
      });
      if (data.error) throw new Error(data.error);
    } catch (err) {
      console.log(err); //handle error
    }
  };

  return <CancelButton onClick={handleRemoveNote} />;
};
