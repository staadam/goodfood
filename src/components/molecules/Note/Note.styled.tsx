import styled from 'styled-components';

export const NoteWrapper = styled.div`
  position: relative;
  width: 85%;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  padding: 30px 10px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme: { colors } }) => colors.primaryColor};
    bottom: 0;
    left: 0;
  }

  &:last-child::after {
    content: none;
  }
`;

export const NoteSpan = styled.span`
  display: block;
  max-width: 90%;
  overflow-wrap: anywhere;
`;
