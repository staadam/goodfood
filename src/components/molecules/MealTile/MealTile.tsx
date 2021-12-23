import React from 'react';
import { Fav } from '../../atoms/Fav/Fav';
import { StyledLink, StyledImg, Wrapper } from './MealTile.styles';
import { useSelector } from 'react-redux';
import { IUser } from '../../../store/stateInterface';

interface ITileParams {
  src: string;
  id: number;
  title?: string;
}

export const MealTile = ({ src, id, title }: ITileParams) => {
  const user = useSelector((state: { user: IUser }) => state.user);

  return (
    <Wrapper>
      <StyledLink to={`/meal/${id}`}>
        <StyledImg alt={title} src={src} />
        <h2>{title}</h2>
      </StyledLink>
      {user && <Fav id={id} user={user} />}
    </Wrapper>
  );
};
