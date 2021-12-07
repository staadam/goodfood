import { INote } from '../store/stateInterface';

export const createUserNotesAdd = (
  currentNotes: Array<INote>,
  mealID: string,
  newNote: string
): Array<INote> => {
  const notesFromCurrentMeal = currentNotes.find((note) => note.mealID === mealID);
  currentNotes = currentNotes.filter((note) => note.mealID !== mealID);

  return notesFromCurrentMeal
    ? [...currentNotes, { mealID, notes: [...notesFromCurrentMeal.notes, newNote] }]
    : [...currentNotes, { mealID, notes: [newNote] }];
};
