import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="search">
      <input
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={onSearch}>🔍</button>
    </div>
  );
};

export default SearchBar;
