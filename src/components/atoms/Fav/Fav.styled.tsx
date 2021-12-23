import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FavButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  transition: transform 0.2s;
`;

export const FavStar = styled(FontAwesomeIcon)`
  color: white;
  font-size: 30px;
  transition: 0.1s color;

  &:hover {
    color: goldenrod;
    cursor: pointer;
  }
`;

export const FullFavStar = styled(FavStar)`
  color: goldenrod;
`;
