// src/Components/nav/Search.tsx
import React, { useState } from 'react';
import styles from './Search.module.css';

interface SearchProps {
  onSearchSubmit: (cityName: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSearchSubmit(inputValue.trim());
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input 
        type="text" 
        id="search" 
        name="search" 
        placeholder="Enter a location here" 
        className={styles.searchInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
      />
      <button className={styles.myLocation} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Search;
