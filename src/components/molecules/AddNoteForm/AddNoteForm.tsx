import React from 'react';
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../../store/stateInterface';
import axios from 'axios';
import { updateNotes } from '../../../store/store';
import { createUserNotesAdd } from '../../../healpers/createUserNotesAdd';

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
  width: 100%;
  flex-wrap: wrap;
`;

export const AddNoteForm = ({ handleCloseModal, mealID }: IAddNoteProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const user = useSelector((state: { user: IUser }) => state.user);
  const dispatch = useDispatch();

  const addNote = async ({ noteText }: { noteText: string }) => {
    const newUserNotes = createUserNotesAdd(user.notes || [], mealID, noteText);

    try {
      dispatch(updateNotes(newUserNotes));
      handleCloseModal();
      const { data } = await axios.post('/.netlify/functions/notes', {
        data: { newUserNotes, user },
      });
      if (data.error) throw new Error(data.error);
    } catch (error) {
      console.log(error); //handle error
    }
  };

  if (errors.noteText) console.log(errors); //handle error

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
