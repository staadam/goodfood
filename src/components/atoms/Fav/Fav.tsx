import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const FavButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  transition: transform 0.2s;
`;

const FavStar = styled(FontAwesomeIcon)`
  color: white;
  font-size: 30px;
`;

interface IFavProps {
  id?: number;
}

export const Fav = ({ id }: IFavProps) => (
  <FavButton className='fav'>
    <FavStar icon={faStar} />
  </FavButton>
);
