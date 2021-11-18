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
  Footer,
} from './Navigation.styled';
import { useSelector } from 'react-redux';
import { IUser } from '../../../store/stateInterface';
import { Login } from '../../molecules/Login/Login';

export const Navigation = () => {
  const username = useSelector((state: { user: IUser }) => (state.user ? state.user.username : 'Guest'));

  return (
    <Wrapper>
      <Logo>
        <p>Good</p>
        <p>Food</p>
      </Logo>
      <Menu>
        <User>
          Welcome: <span>{username}</span>
        </User>
        <StyledListBorder>
          <li>
            <StyledLink to='/list/diet'>Diet</StyledLink>
          </li>
          <li>
            <StyledLink to='/list/cuisine'>Cuisine</StyledLink>
          </li>
          <li>
            <StyledLink to='/list/type'>Type</StyledLink>
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
      <Controls>
        <Login username={username} />
      </Controls>
      <Footer>
        <div>
          Icons made by{' '}
          <a href='https://www.flaticon.com/authors/flat-icons' title='Flat Icons'>
            Flat Icons
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </Footer>
    </Wrapper>
  );
};
