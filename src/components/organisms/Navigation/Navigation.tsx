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
import { NavigationLogin } from '../../molecules/NavigationLogin/NavigationLogin';

export const Navigation = () => {
  const user = useSelector((state: { user: IUser }) => state.user);

  return (
    <Wrapper>
      <Logo>
        <p>Good</p>
        <p>Food</p>
      </Logo>
      <Menu>
        <User>
          Welcome <span>{user ? user.username : 'Guest'}</span>
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
        {user && (
          <StyledList>
            <li>
              <StyledLink to='/user/fav'>Favorite meals</StyledLink>
            </li>
            <li>
              <StyledLink to='/user/notes'>Meals notes</StyledLink>
            </li>
          </StyledList>
        )}
      </Menu>
      <Controls>
        <NavigationLogin user={user} />
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
