import { useState, useEffect } from "react";
import styles from './Themes.module.css'
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

  // ✅ Fix: Return valid JSX elements instead of raw data objects
  return (


    <div className={styles.themeSelector}>
      <label className={styles.title}>Interface Theme</label>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white cursor-pointer"
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default Themes;