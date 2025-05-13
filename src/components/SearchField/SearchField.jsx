import React, { useState } from 'react';
import styles from './SearchField.module.css';

const SearchField = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {query && <button onClick={handleClear}>❌</button>}
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
};

export default SearchField;
