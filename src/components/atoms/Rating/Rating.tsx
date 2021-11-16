import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  font-size: 35px;
  margin-bottom: 30px;
`;

const RatingStar = styled(FontAwesomeIcon)<{ color: string }>`
  color: ${({ color }) => color};
`;

export const Rating = ({ score }: { score: number }) => {
  let ratingStars = [];

  for (let i = 0; i <= 4; i++) {
    let recentStarPoints = score - 20 * i;
    const starToPush =
      recentStarPoints > 10 ? (
        <RatingStar icon={faStar} color={'#ffd700'} key={i} />
      ) : (
        <RatingStar icon={faStar} color={'#fff'} key={i} />
      );
    ratingStars.push(starToPush);
  }
  return <Wrapper>{ratingStars}</Wrapper>;
};
