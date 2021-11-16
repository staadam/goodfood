import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Badges = styled.div`
  width: 100%;
  margin-top: 20px;
  max-height: 100px;

  img {
    height: 100%;
    margin-right: 40px;
  }
`;

export const MealImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 36px;
  }
`;
