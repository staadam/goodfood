import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Navigation } from '../organisms/Navigation/Navigation';

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.bgColor};
  color: ${({ theme: { colors } }) => colors.secondaryColor};

  display: flex;
`;

export const MainTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};
