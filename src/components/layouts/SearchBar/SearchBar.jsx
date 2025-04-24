export const SearchBar = ({ search, setSearch, className = '' }) => {
    return (
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full sm:max-w-lg mx-auto block mt-8 mb-6 px-4 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 ${className}`}
      />
    );
  };
  