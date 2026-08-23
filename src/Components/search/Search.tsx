
import React, { useState } from 'react';
import styles from './Search.module.css';

interface SearchProps {
  onSearchSubmit: (cityName: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSearchSubmit(inputValue.trim());
    }
  };

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onSearchSubmit(`${latitude},${longitude}`);
      },
      () => {
        alert('Unable to retrieve your location. Please check permissions.');
      }
    );
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
      <button className={styles.searchBtn} onClick={handleSubmit}>
        Search
      </button>
      <button className={styles.myLocation} onClick={handleGeolocation}>
        Use my Location
      </button>
    </div>
  );
};

export default Search;