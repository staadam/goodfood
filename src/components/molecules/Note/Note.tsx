import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  padding: 30px 10px;

  &::after {
    content: '';
    position: absolute;
    width: 85%;
    height: 3px;
    background-color: ${({ theme: { colors } }) => colors.primaryColor};
    bottom: 0;
    left: 0;
  }

  &:last-child::after {
    content: none;
  }
`;

interface INoteParams {
  noteText: string;
}

export const Note = ({ noteText }: INoteParams) => {
  return <Wrapper>{noteText}</Wrapper>;
};
