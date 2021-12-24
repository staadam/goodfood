import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IUser } from '../store/stateInterface';
import { useError } from '../hooks/useError';
import { NotesWithTile } from '../components/organisms/NotesWithTile/NotesWithTile';

interface IApiResult {
  id: number;
  title: string;
  image: string;
  notes: Array<string>;
}

const Wrapper = styled.section`
  padding: 30px;
`;

export const Notes = () => {
  const { dispatchError } = useError();
  const [mealsNotes, setMealsNotes] = useState<Array<IApiResult>>([]);
  const mealNotes = useSelector((state: { user: IUser }) => state.user.notes);
  const mealNotesIDs = mealNotes.map((note) => note.mealID);

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${mealNotesIDs.join(
    ','
  )}`;

  const fetchData = useCallback(async () => {
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
  }, [dispatchError, apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
