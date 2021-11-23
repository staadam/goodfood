import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

interface IInputProps {
  type?: string;
  id: string;
  label: string;
  name: string;
  isTextarea?: boolean;
}

const StyledInput = styled.input`
  padding: 8px 15px;
  font-size: 25px;
  border: 2px solid ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 36px;
  background: transparent;
  color: ${({ theme: { colors } }) => colors.secondaryColor};

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

const StyledTextarea = styled.textarea`
  padding: 10px 15px;
  width: 100%;
  font-size: 25px;
  border: 2px solid ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 36px;
  background: transparent;
  min-height: 300px;
  resize: none;
  color: ${({ theme: { colors } }) => colors.secondaryColor};

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  background-color: ${({ theme: { colors } }) => colors.bgColor};
  left: 20px;
`;

const Wrapper = styled.div<{ isTextarea?: boolean }>`
  position: relative;
  margin-top: 30px;
  width: ${({ isTextarea }) => (isTextarea ? '100%' : 'auto')};
`;

export const Input = React.forwardRef(
  ({ type = 'text', name, id, label, isTextarea = false, ...props }: IInputProps, ref: ForwardedRef<any>) => {
    return (
      <Wrapper isTextarea={isTextarea}>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {isTextarea ? (
          <StyledTextarea {...props} id={id} name={name} ref={ref} />
        ) : (
          <StyledInput {...props} id={id} name={name} type={type} ref={ref} />
        )}
      </Wrapper>
    );
  }
);
