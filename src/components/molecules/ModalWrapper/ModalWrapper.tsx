import styled from 'styled-components';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { CancelButton } from '../../atoms/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  padding: 30px;
  max-width: 1300px;
  max-height: 700px;
  border-radius: 36px;
  background-color: ${({ theme: { colors } }) => colors.bgColor};
  color: ${({ theme: { colors } }) => colors.secondaryColor};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface IModalParams {
  handleCloseModal(): void;
  children: React.ReactNode;
}

export const ModalWrapper = ({ children, handleCloseModal }: IModalParams) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(wrapperRef.current, { y: -200, duration: 0.3, opacity: 0 });
  }, []);

  return (
    <>
      <Overlay onClick={handleCloseModal} />
      <Wrapper ref={wrapperRef}>
        {children}
        <CancelButton isCancel={true} onClick={handleCloseModal}></CancelButton>
      </Wrapper>
    </>
  );
};
