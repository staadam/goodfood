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
  const [subCategories, setSubCategories] = useState<CategoryList>([]);

  const fetchCategories = async (category: string) => {
    try {
      const { data } = await axios.post('/.netlify/functions/categories', { category });
      setSubCategories(data);
    } catch (err) {
      console.log('error'); //handle error
    }
  };

  useEffect(() => {
    setSubCategories([]);
    fetchCategories(category);
  }, [category]);

  return (
    <Wrapper>
      {subCategories.length
        ? subCategories.map((subCategory, index) => (
            <LinkTile key={index} subCategory={subCategory} category={category} />
          ))
        : 'loading'}
    </Wrapper>
  );
};
