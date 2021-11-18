import React from 'react';
import { Input } from '../components/atoms/Input/Input';
import { Button } from '../components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/store';
import styled from 'styled-components';
import axios from 'axios';
import { IUser } from '../store/stateInterface';
import { Redirect } from 'react-router-dom';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

type Inputs = {
  login: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const isUserLogged = useSelector((state: { user: IUser }) => state.user || false);

  const sendLogin = async ({ login, password }: { login: string; password: string }) => {
    reset();
    try {
      const { data } = await axios.post('/.netlify/functions/login', { login, password });
      dispatch(setUser(data));
    } catch (err) {
      console.log(err); //handle error
    }
  };

  if (isUserLogged) return <Redirect to={'/'} />;

  return (
    <Wrapper onSubmit={handleSubmit(sendLogin)}>
      <Input id={'login'} label={'login'} {...register('login', { required: true })} />
      <Input
        id={'password'}
        label={'password'}
        type={'password'}
        {...register('password', { required: true })}
      />
      <Button>Login</Button>
    </Wrapper>
  );
};