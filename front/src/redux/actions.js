import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from './action-types';

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER_FAV,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER_FAV,
    payload: orden,
  };
};
