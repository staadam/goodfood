import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IUser } from '../store/stateInterface';
import { Switch, Redirect, Route } from 'react-router-dom';
import { NotesList } from '../components/organisms/NotesList/NotesList';
import { Favorites } from '../components/organisms/Favorites/Favorites';

const Wrapper = styled.section`
  padding: 30px;
`;

export const UserOnlyRoutes = () => {
  const user = useSelector((state: { user: IUser }) => state.user);

  if (!user) return <Redirect to='/login' />;

  return (
    <Wrapper>
      <Switch>
        <Route path='/user/fav'>
          <Favorites />
        </Route>
        <Route path='/user/notes'>
          <NotesList user={user} />
        </Route>
      </Switch>
    </Wrapper>
  );
};
