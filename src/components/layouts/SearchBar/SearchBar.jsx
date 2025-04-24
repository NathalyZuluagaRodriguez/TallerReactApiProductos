import React from 'react';

export const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
  );
};
