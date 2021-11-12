import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 30px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  border: 2px solid ${({ theme: { colors } }) => colors.primaryColor};

  transition: 0.1s color, 0.1s background-color;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.black};
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;
