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
  padding: 30px;
  margin: 30px;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  border: 2px solid red;
  border-radius: 36px;
  background-color: #ff7d7d;
  text-transform: capitalize;
  opacity: 0;
`;

export const Error = ({ message }: IErrorParams) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl: GSAPTimeline = gsap.timeline();
    tl.to(wrapperRef.current, { y: 200, duration: 0.5, opacity: 1 }).to(wrapperRef.current, {
      y: 0,
      duration: 0.5,
      delay: 5,
      opacity: 0,
    });
  });

  return <Wrapper ref={wrapperRef}>{message}</Wrapper>;
};
