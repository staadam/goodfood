import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { MealHeader } from '../components/molecules/MealHeader/MealHeader';
import { MealPreview } from '../components/molecules/MealPreview/MealPreview';
import { MealDetails } from '../components/molecules/MealDetails/MealDetails';
import { MealNotes } from '../components/organisms/MealNotes/MealNotes';

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

const placeholder = {
  title: 'Garlicky Kale',
  image: 'https://spoonacular.com/recipeImages/644387-556x370.jpg',
  sourceUrl: 'http://www.foodista.com/recipe/J2FTJBF7/garlicky-kale',
  creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',

  spoonacularScore: 73,
  readyInMinutes: 45,

  veryPopular: false,
  glutenFree: true,
  vegan: true,
  extendedIngredients: [
    {
      id: 1,
      name: 'cebula',
      measures: {
        metric: {
          amount: 1,
          unitLong: 'Tbs',
        },
      },
    },
  ],
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
`;

export const Meal = () => {
  const { id } = useParams<IParams>();
  const [mealInfo, setMealInfo] = useState<IMealInfo | null>(null);

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

  const fetchData = useCallback(async () => {
    try {
      // const { data } = await axios.get(apiUrl);
      setMealInfo(placeholder);
    } catch (err) {
      console.log(err); //handle error
    }
  }, [apiUrl]);

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
          <MealNotes id={id} />
        </>
      ) : (
        'loading'
      )}
    </Wrapper>
  );
};
