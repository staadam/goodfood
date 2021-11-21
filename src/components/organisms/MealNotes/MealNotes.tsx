import React from 'react';
import styled from 'styled-components';
import { Note } from '../../molecules/Note/Note';
import { Title } from '../../atoms/Title/Title';
import { INote } from '../../../store/stateInterface';
import { Button } from '../../atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
  margin-top: 50px;
  width: 100%;
  grid-column: 1/3;
`;

interface IMealNotesParams {
  id: string;
  notes: Array<INote>;
}

export const MealNotes = ({ id, notes }: IMealNotesParams) => {
  const mealNote = notes.find((note) => note.mealID === id);

  return (
    <Wrapper>
      <Title isBig>Notes: </Title>
      {mealNote
        ? mealNote.notes.map((note, index) => <Note noteText={note} key={index} />)
        : 'You have no notes yet'}
      <Button>
        Add note <FontAwesomeIcon icon={faPlus} />
      </Button>
    </Wrapper>
  );
};
