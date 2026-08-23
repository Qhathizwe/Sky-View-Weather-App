// src/Components/units/Units.tsx
import React from 'react';
import styles from './Units.module.css';

type UnitsProps = {
  units: '°C' | '°F';
  changeUnits: () => void;
};

const Units: React.FC<UnitsProps> = ({ changeUnits, units }) => {
  const buttonLabel = units === '°C' ? 'Switch to °F' : 'Switch to °C';

  return (
    <div className={styles.Units}>
      <p className={styles.label}>Temperature Unit</p>
      <button onClick={changeUnits} className={styles.unitButton}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Units;