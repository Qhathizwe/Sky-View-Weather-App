// src/Pages/SavedLocations.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../../Components/Back-Component/Back';
import styles from './SavedLocations.module.css';

const SAVED_LOCATIONS_KEY = 'saved-locations';

const SavedLocations: React.FC = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SAVED_LOCATIONS_KEY);
      if (raw) {
        setLocations(JSON.parse(raw));
      }
    } catch {
      setLocations([]);
    }
  }, []);

  const removeLocation = (loc: string) => {
    const updated = locations.filter((l) => l !== loc);
    setLocations(updated);
    localStorage.setItem(SAVED_LOCATIONS_KEY, JSON.stringify(updated));
  };

  const goToLocation = (loc: string) => {
    navigate(`/?loc=${encodeURIComponent(loc)}`);
  };

  return (
    <div className={styles.container}>
      <Back />
      <div className={styles.content}>
        <h1 className={styles.title}>Saved Locations</h1>
        
        {locations.length === 0 ? (
          <p className={styles.empty}>No saved locations yet. Search and save from the home page!</p>
        ) : (
          <ul className={styles.list}>
            {locations.map((loc) => (
              <li key={loc} className={styles.locationItem}>
                <span className={styles.locName} onClick={() => goToLocation(loc)}>
                  {loc}
                </span>
                <button
                  className={styles.deleteBtn}
                  onClick={() => removeLocation(loc)}
                  title="Remove location"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SavedLocations;