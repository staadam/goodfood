import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Navigation } from '../organisms/Navigation/Navigation';
import { Error } from '../molecules/Error/Error';
import { useError } from '../../hooks/useError';

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.bgColor};
  color: ${({ theme: { colors } }) => colors.secondaryColor};

  display: flex;
`;

export const MainTemplate = ({ children }: { children: ReactNode }) => {
  const { error } = useError();
  return (
    <Wrapper>
      <Navigation />
      {children}
      {error && <Error message={error} />}
    </Wrapper>
  );
};
