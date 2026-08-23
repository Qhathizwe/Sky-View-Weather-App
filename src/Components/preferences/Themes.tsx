// src/Components/preferences/Themes.tsx
import { useState, useEffect } from 'react';
import styles from './Themes.module.css';

type Theme = 'light' | 'dark';

function Themes() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('weather-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('weather-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles.themeSelector}>
      <label className={styles.title}>Interface Theme</label>
      <button onClick={toggleTheme} className={styles.themeButton}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default Themes;