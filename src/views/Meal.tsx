import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface IParams {
  id: string;
}

export const Meal = () => {
  const { id } = useParams<IParams>();
  const [mealInfo, setMealInfo] = useState({});

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/${id}?apiKey=${apiKey}`;

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(apiUrl);
      setMealInfo(data);
    } catch (err) {
      console.log(err); //handle error
    }
  }, [apiUrl]);

  return <div>danie id {id}</div>;
};
