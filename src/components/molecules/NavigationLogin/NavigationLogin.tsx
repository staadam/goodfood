import React from 'react';
import { StyledLink } from '../../organisms/Navigation/Navigation.styled';
import { removeUser } from '../../../store/store';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IUser } from '../../../store/stateInterface';

const Logout = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  text-decoration: none;
  padding: 10px;
  border: none;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.secondaryColor};
  background-color: transparent;
  transition: color 0.1s, background-color 0.1s;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.primaryColor};
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const NavigationLogin = ({ user }: { user: IUser }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem('sessionToken');
  };

  return (
    <div>
      {user ? <Logout onClick={logout}>Log out</Logout> : <StyledLink to='/login'>Log in</StyledLink>}
    </div>
  );
};
