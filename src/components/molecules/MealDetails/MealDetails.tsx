import React from 'react';
import styled from 'styled-components';
import { Rating } from '../Rating/Rating';
import { LinkButton } from '../../atoms/LinkButton/LinkButton';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IngredientsList } from '../../atoms/IngredientsList/IngredientsList';

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

interface IMealDetailsProps {
  link: string;
  cookingTime: number;
  score: number;
  ingredients: Array<IIngredients>;
}

const Wrapper = styled.div`
  padding-left: 30px;
  grid-row: 2/3;
  grid-column: 2/3;
`;

export const MealDetails = ({ link, cookingTime, score, ingredients }: IMealDetailsProps) => {
  return (
    <Wrapper>
      <Rating score={score} />
      <LinkButton>
        <a href={link}>
          <span>Check recipe</span> <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </LinkButton>
      <p>Preparation time: {cookingTime}m</p>
      <IngredientsList ingredients={ingredients} />
    </Wrapper>
  );
};
