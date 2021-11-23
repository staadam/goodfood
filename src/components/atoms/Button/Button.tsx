import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface IButtonProps {
  children?: ReactNode;
  isCancel?: boolean;
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

const StyledCancelButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border: 2px solid ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 50%;
  background: transparent;
  color: ${({ theme: { colors } }) => colors.secondaryColor};
  cursor: pointer;
  transform: rotate(-45deg);
  transition: transform 0.3s;

  &:hover {
    transform: rotate(45deg);
  }
`;

export const Button = ({ children, isCancel = false, onClick, ...props }: IButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export const CancelButton = ({ children, isCancel = false, onClick, ...props }: IButtonProps) => {
  return (
    <StyledCancelButton onClick={onClick} {...props}>
      <FontAwesomeIcon icon={faPlus} />
    </StyledCancelButton>
  );
};
