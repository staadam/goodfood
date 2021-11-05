import styled, { keyframes } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const showLines = keyframes`
  from{
    transform: scaleX(0);
  }
  
  to{
    transform: scaleX(1);
  }
`;

const showLinks = keyframes`
  from{
    transform: translateX(-200%);
    opacity: 0;
  }
  
  to{
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.nav`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  max-width: 300px;
  min-width: 200px;
  width: 30%;
  background-color: ${({ theme: { colors } }) => colors.menuColor};
  color: ${({ theme: { colors } }) => colors.secondaryColor};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  color: ${({ theme: { colors } }) => colors.primaryColor};
  p {
    font-family: 'Yellowtail', cursive;
    font-size: ${({ theme: { fontSize } }) => fontSize.logo};
    line-height: 1;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 30px 0;
`;

export const User = styled.div`
  padding: 25px 35px;
  span {
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 15px 25px;
`;

export const StyledListBorder = styled(StyledList)`
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 85%;
    height: 3px;
    background-color: ${({ theme: { colors } }) => colors.primaryColor};
    transform-origin: left center;
    animation: ${showLines} 0.5s 1 ease both;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    left: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  color: ${({ theme: { colors } }) => colors.secondaryColor};
  text-decoration: none;
  padding: 10px;
  transition: color 0.1s, background-color 0.1s;
  animation: ${showLinks} 0.5s 0.3s 1 ease both;

  &:hover {
    color: ${({ theme: { colors } }) => colors.primaryColor};
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const Controls = styled.ul`
  padding: 25px;
`;