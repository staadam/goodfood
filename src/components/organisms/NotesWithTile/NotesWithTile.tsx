import React from 'react';
import styled from 'styled-components';
import { MealTile } from '../../molecules/MealTile/MealTile';
import { Note } from '../../molecules/Note/Note';

interface INotesProps {
  id: number;
  title: string;
  src: string;
  notes: Array<string>;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 2fr;
  padding: 10px;
  gap: 20px;
  margin-bottom: 50px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
`;

export const NotesWithTile = ({ src, id, title, notes }: INotesProps) => {
  return (
    <Wrapper>
      <MealTile src={src} id={id} title={title} />
      <div>
        {notes.map((note, index) => (
          <Note key={index} index={index} note={note} id={id.toString()} />
        ))}
      </div>
    </Wrapper>
  );
};
