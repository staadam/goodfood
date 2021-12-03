import React from 'react';
import styled from 'styled-components';
import { Title } from '../Title/Title';

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

interface IIngredientsListProps {
  ingredients: Array<IIngredients>;
}

const Wrapper = styled.div`
  margin-top: 20px;

  ul {
    padding-left: 20px;
  }
`;

export const IngredientsList = ({ ingredients }: IIngredientsListProps) => {
  return (
    <Wrapper>
      <Title>Ingredients: </Title>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} * {ingredient.measures.metric.amount} {ingredient.measures.metric.unitLong}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
