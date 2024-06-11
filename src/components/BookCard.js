import React from 'react';

const BookCard = ({ book, addToBookshelf }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Edition Count: {book.edition_count}</p>
      <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
