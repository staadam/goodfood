import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as classicFaStar } from '@fortawesome/free-regular-svg-icons';

const Wrapper = styled.div`
  position: relative;
  height: 40px;
  margin-bottom: 30px;
`;

const StarWrapper = styled.div`
  position: absolute;
  height: 40px;
  top: 0;
  left: 0;
  font-size: 35px;
  margin-bottom: 30px;
`;

const RatingStar = styled(FontAwesomeIcon)`
  color: #ffd700;
`;

const setStarValue = (score: number, starIndex: number): JSX.Element | null => {
  let starToPush: JSX.Element | null = null;
  let recentStarPoints = score - 20 * starIndex;

  if (recentStarPoints >= 20) {
    starToPush = <RatingStar icon={faStar} key={starIndex} />;
  } else if (recentStarPoints >= 10) {
    starToPush = <RatingStar icon={faStarHalf} key={starIndex} />;
  }
  return starToPush;
};

export const Rating = ({ score }: { score: number }) => {
  let ratingStars = [];

  for (let i = 0; i <= 4; i++) {
    ratingStars.push(setStarValue(score, i));
  }

  return (
    <Wrapper>
      <StarWrapper>
        {ratingStars.map((star, index) => (
          <RatingStar icon={classicFaStar} key={index} />
        ))}
      </StarWrapper>
      <StarWrapper>{ratingStars}</StarWrapper>
    </Wrapper>
  );
};
