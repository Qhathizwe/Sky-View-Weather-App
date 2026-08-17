import React from 'react'
import styles from './Units.module.css'

type UnitsProps = {
    units: string;
    changeUnits: () => void;
}

const Units:React.FC <UnitsProps> = ({changeUnits, units}) => {

    const buttonLabel = units === '°C' ? '°F' : '°C';

  return (
    <div className={styles.Units}>
        <title>Units</title>
      <button
      onClick={() =>changeUnits}
      >{buttonLabel}</button>
    </div>
  )
}

export default Units
