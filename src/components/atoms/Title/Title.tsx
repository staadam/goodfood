import styled from 'styled-components';

export const Title = styled.h2<{ isBig?: boolean }>`
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.xxl : fontSize.l)};
  font-weight: 600;
`;
