import React from 'react';
import { Title } from '../../atoms/Title/Title';
import styled from 'styled-components';

interface IMealHeaderProps {
  title: string;
  description?: string;
  isBig?: boolean;
}

const Wrapper = styled.div`
  grid-column: 1/3;
  margin-bottom: 100px;
`;

export const MealHeader = ({ title, description, isBig = false }: IMealHeaderProps) => (
  <Wrapper>
    <Title isBig={isBig}>{title}</Title>
    {description && <p>{description}</p>}
  </Wrapper>
);
