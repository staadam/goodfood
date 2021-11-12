import React from 'react';
import { MainTemplate } from '../components/templates/MainTemplate';
import { Switch, Route } from 'react-router-dom';
import { List } from './List';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  min-height: 100%;
`;

export const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route path='/' exact>
            hey ya
          </Route>
          <Route path='/list/:category'>
            <List />
          </Route>
          <Route path='/user/fav'>fav</Route>
          <Route path='/user/notes'>notes</Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};
