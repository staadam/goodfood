import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IUser } from '../store/stateInterface';
import { useError } from '../hooks/useError';
import { MealTile } from '../components/molecules/MealTile/MealTile';

interface IApiResult {
  id: number;
  title: string;
  image: string;
}

const Wrapper = styled.section`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const Favorites = () => {
  const { dispatchError } = useError();
  const [meals, setMeals] = useState<Array<IApiResult>>([]);
  const favs = useSelector((state: { user: IUser }) => state.user.favs);

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${favs.join(',')}`;

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(apiUrl);
      setMeals(data);
    } catch (err: any) {
      dispatchError(err.message);
    }
  }, [dispatchError, apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Wrapper>
      {meals.length
        ? meals.map((meal, index) => (
            <MealTile key={index} src={meal.image} id={meal.id} title={meal.title} />
          ))
        : 'loading'}
    </Wrapper>
  );
};
