import React from 'react';

function Form() {
  return (
    <form>
      <label htmlFor="title">
        <input id="title" placeholder="Book title" />
      </label>

      <label htmlFor="author">
        <input id="author" placeholder="Book author" />
      </label>

      <button type="button">ADD BOOK</button>
    </form>
  );
}

export default Form;
