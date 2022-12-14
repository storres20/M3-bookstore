import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; /* Generate a random ID */
import { addBook } from '../redux/books/books';
import './Form.css';

function Form() {
  const initial = {
    author: '',
    title: '',
  };
  /* Setup useState */
  const [newBook, setNewBook] = useState(initial);

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
      item_id: uuidv4(),
      category: 'book',
    })); /* keys: item_id, title, author, category  */
    setNewBook(initial); /* Reset input's value */
  };

  return (
    <>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <input className="input title-input" name="title" placeholder="Book title" onChange={handleChange} value={newBook.title} required autoComplete="off" />

        <input className="input title-input" name="author" placeholder="Book author" onChange={handleChange} value={newBook.author} required autoComplete="off" />

        <select className="input category-input">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Economy">Drama</option>
        </select>

        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </>
  );
}

export default Form;
