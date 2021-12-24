import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

interface IErrorParams {
  message: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: -200px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 30px 30px 15px 30px;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  border: 2px solid red;
  border-radius: 20px;
  background-color: #ff7d7d;
  text-transform: capitalize;
  opacity: 0;
`;

const Timer = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 36px;
  background-color: red;
  margin-top: 15px;
`;

export const Error = ({ message }: IErrorParams) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl: GSAPTimeline = gsap.timeline();
    tl.to(wrapperRef.current, { y: 200, duration: 0.5, opacity: 1 })
      .to(timerRef.current, {
        width: 0,
        ease: 'linear',
        duration: 5,
        delay: 0.1,
      })
      .to(wrapperRef.current, {
        y: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
      });
  });

  return (
    <Wrapper ref={wrapperRef}>
      <p>{message}</p>
      <Timer ref={timerRef} />
    </Wrapper>
  );
};
