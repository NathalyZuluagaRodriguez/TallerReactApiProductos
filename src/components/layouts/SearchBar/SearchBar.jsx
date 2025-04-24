import React from 'react';

export const SearchBar = ({ search, setSearch, className = '' }) => {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={` flex flex-col items-center text-center w-full max-w-md mx-auto mt-6 mb-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200  ${className}`}
    />
  );
};
