import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    if (savedBookshelf) {
      setBookshelf(savedBookshelf);
    }
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <div className="App">
        <nav className="nav-links">
          <Link to="/">Search</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage addToBookshelf={addToBookshelf} />} />
          <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
