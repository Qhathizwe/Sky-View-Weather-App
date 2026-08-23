// src/Pages/Settings/SettingsPage.tsx
import Preferences from '../../Components/preferences/Preferences';
import styles from './Settings.module.css';
import Back from '../../Components/Back-Component/Back';
import { useState, useEffect } from 'react';

const SettingsPage = () => {
  const [units, setUnits] = useState<'°C' | '°F'>('°C');

  useEffect(() => {
    const saved = localStorage.getItem('weather-units');
    if (saved === '°C' || saved === '°F') setUnits(saved);
  }, []);

  const changeUnits = () => {
    setUnits((prev) => {
      const next = prev === '°C' ? '°F' : '°C';
      localStorage.setItem('weather-units', next);
      return next;
    });
  };

  return (
    <div className={styles.SettingsContainer}>
      <Back />
      <Preferences units={units} changeUnits={changeUnits} />
    </div>
  );
};

export default SettingsPage;