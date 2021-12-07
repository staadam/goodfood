import { INote } from '../store/stateInterface';

export const createNewUserNotesArray = (
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
