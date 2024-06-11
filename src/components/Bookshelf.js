import React from 'react';
import BookCard from './BookCard';

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="bookshelf">
      {bookshelf.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default Bookshelf;
