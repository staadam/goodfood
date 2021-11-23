import React from 'react';
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { INote, IUser } from '../../../store/stateInterface';
import axios from 'axios';
import { updateNotes } from '../../../store/store';

type Inputs = {
  noteText: string;
};

interface IAddNoteProps {
  handleCloseModal(): void;
  mealID: string;
}

const FormWrapper = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  flex-wrap: wrap;
`;

const createNewUserNotesArray = (
  currentNotes: Array<INote>,
  mealID: string,
  newNote: string
): Array<INote> => {
  const notesFromCurrentMeal = currentNotes.find((note) => note.mealID === mealID);
  currentNotes = currentNotes.filter((note) => note.mealID !== mealID);

  const newUserNotes = notesFromCurrentMeal
    ? [...currentNotes, { mealID, notes: [...notesFromCurrentMeal.notes, newNote] }]
    : [...currentNotes, { mealID, notes: [newNote] }];

  return newUserNotes;
};

export const AddNoteForm = ({ handleCloseModal, mealID }: IAddNoteProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const user = useSelector((state: { user: IUser }) => state.user);
  const dispatch = useDispatch();

  const addNote = async ({ noteText }: { noteText: string }) => {
    const newUserNotes = createNewUserNotesArray(user.notes, mealID, noteText);

    try {
      await axios.post('/.netlify/functions/addnote', { newUserNotes, user });
      dispatch(updateNotes(newUserNotes));
      handleCloseModal();
    } catch (error) {
      console.log(error); //handle error
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit(addNote)}>
      <Input
        isTextarea={true}
        id={'noteText'}
        label={'Your note'}
        {...register('noteText', { required: true })}
      />
      <Button>Add note</Button>
      <Button onClick={handleCloseModal}>Cancel</Button>
    </FormWrapper>
  );
};
