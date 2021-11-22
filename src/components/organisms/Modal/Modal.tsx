import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper } from '../../molecules/ModalWrapper/ModalWrapper';

interface IModalParams {
  handleCloseModal(): void;
  children: React.ReactNode;
}

const modalContainer = document.getElementById('modal-container') as HTMLElement;

export const Modal = ({ handleCloseModal, children }: IModalParams) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return createPortal(<ModalWrapper handleCloseModal={handleCloseModal}>{children}</ModalWrapper>, modalNode);
};
