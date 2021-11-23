import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MealTile } from '../components/molecules/MealTile/MealTile';
import axios from 'axios';

const Wrapper = styled.section`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

interface IParams {
  category: string;
  subCategory: string;
}

interface IApiResult {
  id: number;
  title: string;
  image: string;
}

export const Meals = () => {
  const { category, subCategory } = useParams<IParams>();
  const [meals, setMeals] = useState<Array<IApiResult>>([]);

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&${category}=${subCategory}&number=40`;

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(apiUrl);
      setMeals(data.results);
    } catch (err) {
      console.log(err); //handle error
    }
  }, [apiUrl]);

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
