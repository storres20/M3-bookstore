// books.js

// Actions... types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((item) => item.id.toString() !== action.payload.toString());
    default: return state;
  }
}

// Action Creators
export function addBook(obj) {
  return { type: ADD_BOOK, payload: obj };
}

export function removeBook(obj) {
  return { type: REMOVE_BOOK, payload: obj };
}
