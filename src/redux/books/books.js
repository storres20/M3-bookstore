// books.js
import { createAsyncThunk } from '@reduxjs/toolkit';

const appId = 'RrpzlD8eVH1PdYwupfbF';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

// Actions... types
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

// Reducer
export default function reducer(state = [], action) {
  const list = [];
  switch (action.type) {
    // do reducer stuff
    // ADD books to the API
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    // REMOVE books from the API
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((item) => item.item_id !== action.payload);
    // GET books from the API
    case `${GET_BOOK}/fulfilled`:
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        book.item_id = element;
        list.push(book);
      });
      return list;
    default: return state;
  }
}

// Action Creators
export const addBook = createAsyncThunk(ADD_BOOK, async (obj) => {
  const addBookUrl = `${url + appId}/books`;
  await fetch(addBookUrl,
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  return obj;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const removeBookUrl = `${url + appId}/books/${id}`;
  await fetch(removeBookUrl,
    {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    });
  return id;
});

export const getBook = createAsyncThunk(GET_BOOK, async () => {
  const getBookUrl = `${url + appId}/books`;
  const response = await fetch(getBookUrl,
    {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result;
});
