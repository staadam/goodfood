import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledImg = styled.img`
  min-height: 200px;
  width: 100%;
  border-radius: 36px;
  transition: 0.2s opacity;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  position: relative;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.white};
  overflow: hidden;

  h2 {
    padding: 10px 10px 0 10px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  .fav {
    transform: translateY(-100px);
  }

  &:hover {
    ${StyledImg} {
      opacity: 0.3;
      filter: blur(2px);
    }

    .fav {
      transform: translateY(0);
    }
`;
