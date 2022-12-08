import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

function Home() {
  return (
    <div>
      <Book title="The Hunger Games" author="Suzanne Collins" />
      <Book title="Dune" author="Frank Herbert" />
      <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />

      <Form />
    </div>
  );
}

export default Home;
