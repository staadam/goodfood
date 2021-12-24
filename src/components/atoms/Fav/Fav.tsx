import React from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { updateFav } from '../../../store/store';
import { FavButton, FavStar, FullFavStar } from './Fav.styled';
import axios from 'axios';
import { IUser } from '../../../store/stateInterface';
import { useError } from '../../../hooks/useError';

interface IFavProps {
  id: number;
  user: IUser;
}

export const Fav = ({ id, user }: IFavProps) => {
  const { dispatchError } = useError();
  const { favs } = user;
  const dispatch = useDispatch();
  const isFav = favs.find((fav) => fav === id.toString());

  const handleOnClick = async () => {
    const newFavs = isFav ? favs.filter((fav) => fav !== id.toString()) : [...favs, id.toString()];
    try {
      dispatch(updateFav(newFavs));
      const { data } = await axios.post('/.netlify/functions/favs', { newFavs, user });
      if (data.error) throw new Error(data.error);
    } catch (e: any) {
      dispatchError(e.message);
    }
  };

  return (
    <FavButton className='fav' onClick={handleOnClick}>
      {isFav ? <FullFavStar icon={fullStar} /> : <FavStar icon={faStar} />}
    </FavButton>
  );
};
