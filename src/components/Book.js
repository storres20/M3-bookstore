import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
