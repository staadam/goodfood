import React from 'react';
import styled from 'styled-components';
import { Note } from '../../molecules/Note/Note';
import { Title } from '../../atoms/Title/Title';

const Wrapper = styled.section`
  margin-top: 50px;
  width: 100%;
  grid-column: 1/3;
`;

interface IMealNotesParams {
  id: string;
}

const notes = ['ssss', 'asodjasoduigaosidguasoyuidgasoyuidg', 'lorem ipsum dolor sit amet'];

export const MealNotes = ({ id }: IMealNotesParams) => {
  return (
    <Wrapper>
      <Title isBig>Notes: </Title>
      {notes.map((note) => (
        <Note noteText={note} key={note} />
      ))}
    </Wrapper>
  );
};
