import React, { useCallback, useEffect } from 'react';
import { MainTemplate } from '../components/templates/MainTemplate';
import { Switch, Route } from 'react-router-dom';
import { List } from './List';
import { Meals } from './Meals';
import { Meal } from './Meal';
import { Login } from './Login';
import styled from 'styled-components';
import axios from 'axios';
import { setUser } from '../store/store';
import { useDispatch } from 'react-redux';
import { Favorites } from './Favorites';

const Wrapper = styled.div`
  padding: 30px;
  width: 100%;
  min-height: 100%;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const App = () => {
  const dispatch = useDispatch();

  const loginViaToken = useCallback(async () => {
    const sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken) {
      try {
        const { data } = await axios.post('/.netlify/functions/auth', { sessionToken });
        if (data.error) throw new Error(data.error);
        dispatch(setUser(data));
      } catch (err: Error | any) {
        console.log(err.message); //handle error
      }
    }
  }, [dispatch]);

  useEffect(() => {
    loginViaToken();
  }, [loginViaToken]);

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
          <Route path='/user/fav'>
            <Favorites />
          </Route>
          <Route path='/user/notes'>notes</Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};
