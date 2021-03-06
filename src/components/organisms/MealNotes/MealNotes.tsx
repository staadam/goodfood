import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../../atoms/Title/Title';
import { INote } from '../../../store/stateInterface';
import { Button } from '../../atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../Modal/Modal';
import { AddNoteForm } from '../../molecules/AddNoteForm/AddNoteForm';
import { Note } from '../../molecules/Note/Note';

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
  const mealNotes = notes.find((note) => note.mealID === id);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <Wrapper>
      <Title isBig>Notes: </Title>
      {mealNotes ? (
        mealNotes.notes.map((note, index) => <Note key={index} index={index} note={note} id={id} />)
      ) : (
        <p>You have no notes yet</p>
      )}
      <Button onClick={() => setModalIsOpen(true)}>
        Add note <FontAwesomeIcon icon={faPlus} />
      </Button>
      {modalIsOpen ? (
        <Modal handleCloseModal={handleCloseModal}>
          <AddNoteForm handleCloseModal={handleCloseModal} mealID={id} />
        </Modal>
      ) : null}
    </Wrapper>
  );
};
