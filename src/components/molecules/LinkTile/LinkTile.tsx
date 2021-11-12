import React from 'react';
import { StyledLink } from './LinkTile.styled';

export const LinkTile = ({ category }: { category: string }) => {
  return (
    <li>
      <StyledLink to={`/meals/${category.replace(' ', '-')}`}>{category}</StyledLink>
    </li>
  );
};
