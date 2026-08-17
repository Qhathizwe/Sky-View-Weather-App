// src/Components/location card/CardProps.tsx
import React from 'react';
import type { CardItems } from './CardItems';
import styles from './CardProps.module.css';

type CardItems_dt = {
    cardItems: CardItems;
    units : string;
};

const CardProps: React.FC<CardItems_dt> = ({ cardItems, units }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <p>{cardItems.Region}</p>
        <h3>{cardItems.locationName}</h3>
        <p>{cardItems.date}</p>

        <div className={styles.temp_descrip}>
          <h1>{cardItems.temperature}{units}°C</h1>
          <p>{cardItems.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProps;
