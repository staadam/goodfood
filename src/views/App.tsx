import React from 'react';
import { MainTemplate } from '../components/templates/MainTemplate';
import { Switch, Route } from 'react-router-dom';
import { List } from './List';
import { Meals } from './Meals';
import { Meal } from './Meal';
import styled from 'styled-components';
import { Login } from './Login';

const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  min-height: 100%;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const App = () => {
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
          <Route path='/meals/:category/:subCategory'>
            <Meals />
          </Route>
          <Route path='/meal/:id'>
            <Meal />
          </Route>
          <Route path='/user/fav'>fav</Route>
          <Route path='/user/notes'>notes</Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};
