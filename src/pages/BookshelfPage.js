import React from 'react';

const BookshelfPage = ({ bookshelf }) => {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div className="book-card" key={index}>
            <h2>{book.title}</h2>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <p>Edition Count: {book.edition_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
