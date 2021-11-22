import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButtonProps {
  children: ReactNode;
  onClick?(): void;
}

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

export const Button = ({ children, onClick, ...props }: IButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
