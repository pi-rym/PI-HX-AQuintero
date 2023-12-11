import axios from 'axios';
import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from './action-types';

const URL = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}`, character);
      // console.log(data)
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL}/${id}`);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
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
