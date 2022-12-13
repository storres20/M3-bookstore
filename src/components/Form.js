import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; /* Generate a random ID */
import { addBook } from '../redux/books/books';

function Form() {
  /* Setup useState */
  const [newBook, setNewBook] = useState({
    author: '',
    title: '',
  });

  /* Catch input's new data into "newBook" state */
  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* After clicking on "ADD BOOK" button */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      ...newBook,
      id: uuidv4(),
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input name="title" placeholder="Book title" onChange={handleChange} />
      </label>

      <label htmlFor="author">
        <input name="author" placeholder="Book author" onChange={handleChange} />
      </label>

      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default Form;
