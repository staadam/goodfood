import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CancelButton } from '../../atoms/Button/Button';
import { removeNote } from '../../../store/store';
import axios from 'axios';
import { IUser } from '../../../store/stateInterface';

export const RemoveNote = ({ noteText, id }: { noteText: string; id: string }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: { user: IUser }) => state.user);

  const handleRemoveNote = async () => {
    try {
      const { data } = await axios.post('/.netlify/functions/notes', {
        action: 'removeNote',
        data: { noteText, id, user },
      });
      if (data.error) throw new Error(data.error);
      dispatch(removeNote({ noteText, mealID: id }));
    } catch (err) {
      console.log(err); //handle error
    }
  };

  return <CancelButton onClick={handleRemoveNote} />;
};
