import styled from 'styled-components';

export const LinkButton = styled.button`
  border: none;
  background: transparent;
  margin-bottom: 40px;
  a {
    display: block;
    padding: 20px;
    font-size: 25px;
    border: 2px solid ${({ theme: { colors } }) => colors.primaryColor};
    border-radius: 36px;
    color: ${({ theme: { colors } }) => colors.secondaryColor};
    text-decoration: none;

    span {
      display: inline-block;
      margin-right: 10px;
      transition: 0.3s margin-right;
    }

    &:hover span {
      margin-right: 30px;
    }
  }
`;
