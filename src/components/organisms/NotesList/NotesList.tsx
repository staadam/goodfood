import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useError } from '../../../hooks/useError';
import { NotesWithTile } from '../NotesWithTile/NotesWithTile';
import { INote, IUser } from '../../../store/stateInterface';

interface IApiResult {
  id: number;
  title: string;
  image: string;
  notes: Array<string>;
}

const Wrapper = styled.section`
  padding: 30px;
`;

const fetchData = async (
  dispatchError: (message: string) => void,
  setMealsNotes: (mealsWithNotes: Array<IApiResult>) => void,
  mealNotes: Array<INote>,
  apiUrl: string
) => {
  try {
    const { data } = await axios.get<Array<IApiResult>>(apiUrl);
    const mealsWithNotes = data.map((data) => {
      const { notes } = mealNotes.filter((note) => note.mealID === data.id.toString())[0];
      return { ...data, notes };
    });
    setMealsNotes(mealsWithNotes);
  } catch (err: any) {
    dispatchError(err.message);
  }
};

export const NotesList = ({ user }: { user: IUser }) => {
  const { dispatchError } = useError();
  const [mealsNotes, setMealsNotes] = useState<Array<IApiResult>>([]);
  const mealNotes = user.notes;
  const mealNotesIDs = mealNotes.map((note) => note.mealID);

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${mealNotesIDs.join(
    ','
  )}`;

  useEffect(() => {
    if (mealNotesIDs.length) fetchData(dispatchError, setMealsNotes, mealNotes, apiUrl);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {mealsNotes.length
        ? mealsNotes.map((meal, index) => (
            <NotesWithTile key={index} src={meal.image} id={meal.id} title={meal.title} notes={meal.notes} />
          ))
        : 'loading'}
    </Wrapper>
  );
};
