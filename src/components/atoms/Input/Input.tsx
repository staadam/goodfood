import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

interface IInputProps {
  type?: string;
  id: string;
  label: string;
  name: string;
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

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  background-color: ${({ theme: { colors } }) => colors.bgColor};
  left: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const Input = React.forwardRef(
  ({ type = 'text', name, id, label, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Wrapper>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput {...props} id={id} name={name} type={type} ref={ref} />
      </Wrapper>
    );
  }
);
