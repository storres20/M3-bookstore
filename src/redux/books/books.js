// books.js

const initialBooks = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

// Actions... types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function reducer(state = initialBooks, action) {
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
