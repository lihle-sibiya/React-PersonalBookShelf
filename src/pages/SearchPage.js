import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async (e) => {
    e.preventDefault();
    if (query) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setResults(response.data.docs);
    }
  };

  return (
    <div>
      <h1>Book Search</h1>
      <form onSubmit={searchBooks}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for books..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="book-list">
        {results.map((book) => (
          <div className="book-card" key={book.key}>
            <h2>{book.title}</h2>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <p>Edition Count: {book.edition_count}</p>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
      <Link to="/bookshelf">
        <button className="bookshelf-button">Go to My Bookshelf</button>
      </Link>
    </div>
  );
};

export default SearchPage;
