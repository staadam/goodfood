import React from 'react';
import { Input } from '../components/atoms/Input/Input';
import { Button } from '../components/atoms/Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';

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

  const sendLogin = async ({ login, password }: { login: string; password: string }) => {
    reset();
    try {
      const { data } = await axios.post('/.netlify/functions/login', { login, password });
      console.log(data);
    } catch (err) {
      console.log(err); //handle error
    }
  };

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
