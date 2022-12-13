import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBook } from '../redux/books/books';

function Home() {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  /* Load Redux State */
  const book = useSelector((state) => state.book);
  return (
    <div>
      {/* Render Redux State */}
      {
        book.map((item) => (
          <Book key={item.item_id} title={item.title} author={item.author} id={item.item_id} />
        ))
      }

      <Form />
    </div>
  );
}

export default Home;
