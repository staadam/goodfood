import { INote } from '../store/stateInterface';

export const createUserNotesEdit = (
  currentNotes: Array<INote>,
  mealID: string,
  newNote: string,
  index: number
): Array<INote> => {
  const mealNotes: INote | undefined = currentNotes.find((meal) => meal.mealID === mealID);
  if (mealNotes) {
    currentNotes = currentNotes.filter((note) => note.mealID !== mealID);
    if (newNote.length === 0) {
      mealNotes.notes.splice(index, 1);
      return [mealNotes];
    }
    mealNotes.notes[index] = newNote;
    return [...currentNotes, mealNotes];
  }
  return currentNotes;
};
