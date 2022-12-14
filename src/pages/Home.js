/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBook } from '../redux/books/books';
import './Home.css';

function Home() {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  /* Load Redux State */
  const book = useSelector((state) => state.book);
  return (
    <div className="homeContainer">
      {/* Render Redux State */}
      <div className="homeBook">
        {
          book.map((item) => (
            <Book key={item.item_id} title={item.title} author={item.author} id={item.item_id} category={item.category} />
          ))
        }
      </div>
      <div className="horizontal-divider" />

      <Form />
    </div>
  );
}

export default Home;
