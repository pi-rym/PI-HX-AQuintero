import { ADD_FAV, REMOVE_FAV } from './action-types';

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case REMOVE_FAV:
      let favorites = state.myFavorites.filter((favorite) => {
        return favorite.id !== parseInt(payload);
      });

      return {
        ...state,
        myFavorites: favorites,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
