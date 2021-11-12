import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { LinkTile } from '../components/molecules/LinkTile/LinkTile';

const Wrapper = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  list-style: none;
`;

interface IParams {
  category: string;
}

type CategoryList = Array<string>;

export const List = () => {
  const { category } = useParams<IParams>();
  const [categories, setCategories] = useState<CategoryList>([]);

  useEffect(() => {
    setCategories([]);
    axios
      .post('/.netlify/functions/categories', { category })
      .then((res) => {
        setCategories(res.data.options);
      })
      .catch((err) => console.log('error')); //handle error
  }, [category]);

  return (
    <Wrapper>
      {categories.length
        ? categories.map((category, index) => <LinkTile key={index} category={category} />)
        : 'loading'}
    </Wrapper>
  );
};
