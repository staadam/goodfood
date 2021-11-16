import React from 'react';
import { Fav } from '../../atoms/Fav/Fav';
import { StyledLink, StyledImg } from './MealTile.styles';

interface ITileParams {
  src: string;
  id: number;
  title?: string;
}

export const MealTile = ({ src, id, title }: ITileParams) => {
  return (
    <StyledLink to={`/meal/${id}`}>
      <StyledImg alt={title} src={src} />
      <h2>{title}</h2>
      <Fav id={id} />
    </StyledLink>
  );
};
