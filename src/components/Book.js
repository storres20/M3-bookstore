import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import './Book.css';

function Book({
  title, author, id, category,
}) {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* After clicking on "REMOVE" button */
  const handleRemove = (id) => {
    /* dispatch removeBook "Action Creator" */
    dispatch(removeBook(id));
  };

  return (
    <div className="bookContainer">
      <div>
        <h2 className="bookCategory">{category}</h2>
        <h2 className="bookTitle">{title}</h2>
        <h3 className="bookAuthor">{author}</h3>
        <div className="action-buttons">
          <button className="button-outline" type="button">Comments</button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button" onClick={() => handleRemove(id)}>Remove</button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-container"><div className="circular-progress" /></div>
        <div className="progress-stat">
          <p className="percent-complete">64%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
