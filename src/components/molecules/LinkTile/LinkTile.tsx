import React from 'react';
import { StyledLink } from './LinkTile.styled';

export const LinkTile = ({ subCategory, category }: { subCategory: string; category: string }) => {
  return (
    <li>
      <StyledLink to={`/meals/${category}/${subCategory}`}>{subCategory}</StyledLink>
    </li>
  );
};
