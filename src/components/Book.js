import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* After clicking on "REMOVE" button */
  const handleRemove = (id) => {
    /* dispatch removeBook "Action Creator" */
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
