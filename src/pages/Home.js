import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

function Home() {
  /* Load Redux State */
  const book = useSelector((state) => state.book);
  return (
    <div>
      {/* Render Redux State */}
      {
        book.map((item) => (
          <Book key={item.id} title={item.title} author={item.author} id={item.id} />
        ))
      }

      <Form />
    </div>
  );
}

export default Home;
