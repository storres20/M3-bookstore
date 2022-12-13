import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    book: booksReducer,
    status: categoriesReducer,
  },
});

export default store;
