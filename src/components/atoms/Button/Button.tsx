import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 30px;
  font-size: 25px;
  border: 2px solid ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 36px;
  background: transparent;
  color: ${({ theme: { colors } }) => colors.secondaryColor};
  margin-top: 20px;
  cursor: pointer;
  transition: padding 0.1s;

  &:hover {
    padding: 8px 40px;
  }
`;

export const Button = ({ children, ...props }: { children: ReactNode }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
