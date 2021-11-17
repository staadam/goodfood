import React from 'react';
import popularImg from '../../../assets/images/trending.png';
import glutenFreeImg from '../../../assets/images/gluten-free.png';
import veganImg from '../../../assets/images/vegan-food.png';
import { Wrapper, MealImg, Badges } from './MealPreview.styled';

interface IMealPreviewProps {
  popular: boolean;
  vegan: boolean;
  glutenFree: boolean;
  imgSrc: string;
  imgAlt: string;
}

export const MealPreview = ({ popular, vegan, glutenFree, imgSrc, imgAlt }: IMealPreviewProps) => (
  <Wrapper>
    <MealImg>{<img src={imgSrc} alt={imgAlt} />}</MealImg>
    <Badges>
      {popular && <img alt='popular' src={popularImg} />}
      {vegan && <img alt='vegan' src={glutenFreeImg} />}
      {glutenFree && <img alt='gluten free' src={veganImg} />}
    </Badges>
  </Wrapper>
);
