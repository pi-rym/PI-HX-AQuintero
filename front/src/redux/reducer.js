import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from './action-types';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      // let copy1 = state.allCharacters;
      // copy1.push(payload);

      // return {
      //   ...state,
      //   myFavorites: copy1,
      //   allCharacters: copy1
      // };

      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      let copy = state.allCharacters.filter((favorite) => {
        return favorite.id !== parseInt(payload);
      });

      return {
        ...state,
        myFavorites: copy,
        allCharacters: copy,
      };

    case FILTER_FAV:
      let copy2 = [...state.allCharacters];

      if (payload === 'All') {
        return {
          ...state,
          myFavorites: copy2,
        };
      }

      let filtered = copy2.filter((favorite) => {
        return favorite.gender === payload;
      });

      return {
        ...state,
        myFavorites: filtered,
      };

    case ORDER_FAV:
      let copy3 = [...state.allCharacters];
      /* return {
        ...state,
        myFavorites: copy3.sort((a, b) => {
          if (payload === 'A') {
            return a.id - b.id
          }
          return b.id - a.id
        }),
      }; */

      return {
        ...state,
        myFavorites: copy3.sort((a, b) => {
          return payload === 'A' ? a.id - b.id : b.id - a.id;
        }),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;

//Rick, Morty, Beth, Summer

//Female --> Beth, Summer
//Male --> Rick , Morty
