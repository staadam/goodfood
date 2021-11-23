import { createStore } from 'redux';
import { typeInitialState, IAction } from './stateInterface';

export const updateNotes = (payload: any) => {
  return {
    type: 'notes/update',
    payload,
  };
};

export const setUser = (payload: any) => {
  return {
    type: 'user/set',
    payload,
  };
};

export const removeUser = () => {
  return {
    type: 'user/remove',
  };
};

const initialState: typeInitialState = {
  user: null,
};

const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'user/set':
      return { ...state, user: action.payload };
    case 'user/remove':
      return { ...state, user: null };
    case 'notes/update':
      return { ...state, user: { ...state.user, notes: action.payload } };
    default:
      return state;
  }
};

export const store = createStore(userReducer);
