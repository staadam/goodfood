import React from 'react';
import {
  Logo,
  Wrapper,
  Menu,
  StyledList,
  StyledLink,
  StyledListBorder,
  User,
  Controls,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <p>Good</p>
        <p>Food</p>
      </Logo>
      <Menu>
        <User>
          Welcome: <span>User</span>
        </User>
        <StyledListBorder>
          <li>
            <StyledLink to='/list/diets'>Diets</StyledLink>
          </li>
          <li>
            <StyledLink to='/list/cuisines'>Cuisines</StyledLink>
          </li>
          <li>
            <StyledLink to='/list/types'>Types</StyledLink>
          </li>
        </StyledListBorder>
        <StyledList>
          <li>
            <StyledLink to='/user/fav'>Favorite meals</StyledLink>
          </li>
          <li>
            <StyledLink to='/user/notes'>Meals notes</StyledLink>
          </li>
        </StyledList>
      </Menu>
      <Controls>login</Controls>
    </Wrapper>
  );
};
