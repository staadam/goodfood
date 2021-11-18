import React from 'react';
import { StyledLink } from '../../organisms/Navigation/Navigation.styled';
import { removeUser } from '../../../store/store';
import { useDispatch } from 'react-redux';

export const Login = ({ username }: { username: string }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      {username === 'Guest' ? (
        <StyledLink to='/login'>Log in</StyledLink>
      ) : (
        <button onClick={logout}>Log out</button>
      )}
    </div>
  );
};
