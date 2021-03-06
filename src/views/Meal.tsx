import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { MealHeader } from '../components/molecules/MealHeader/MealHeader';
import { MealPreview } from '../components/molecules/MealPreview/MealPreview';
import { MealDetails } from '../components/molecules/MealDetails/MealDetails';
import { MealNotes } from '../components/organisms/MealNotes/MealNotes';
import { useSelector } from 'react-redux';
import { IUser } from '../store/stateInterface';
import { useError } from '../hooks/useError';

interface IParams {
  id: string;
}

interface IIngredients {
  id: number;
  name: string;
  measures: {
    metric: {
      amount: number;
      unitLong: string;
    };
  };
}

interface IMealInfo {
  sourceUrl: string;
  title: string;
  creditsText: string;
  image: string;

  spoonacularScore: number;
  readyInMinutes: number;

  veryPopular: boolean;
  vegan: boolean;
  glutenFree: boolean;

  extendedIngredients: Array<IIngredients>;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
`;

export const Meal = () => {
  const { dispatchError } = useError();
  const { id } = useParams<IParams>();
  const [mealInfo, setMealInfo] = useState<IMealInfo | null>(null);
  const user = useSelector((state: { user: IUser }) => state.user);

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(apiUrl);
      setMealInfo(data);
    } catch (err: any) {
      dispatchError(err.message);
    }
  }, [dispatchError, apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Wrapper>
      {mealInfo ? (
        <>
          <MealHeader title={mealInfo.title} description={mealInfo.creditsText} isBig />
          <MealPreview
            popular={mealInfo.veryPopular}
            vegan={mealInfo.vegan}
            glutenFree={mealInfo.glutenFree}
            imgSrc={mealInfo.image}
            imgAlt={mealInfo.title}
          />
          <MealDetails
            link={mealInfo.sourceUrl}
            cookingTime={mealInfo.readyInMinutes}
            score={mealInfo.spoonacularScore}
            ingredients={mealInfo.extendedIngredients}
          />
          {user ? <MealNotes id={id} notes={user.notes || []} /> : null}
        </>
      ) : (
        'loading'
      )}
    </Wrapper>
  );
};
