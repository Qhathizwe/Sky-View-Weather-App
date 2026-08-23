// src/Components/location card/CardProps.tsx
import React from 'react';

import WeatherIcon from '../weather-icons/WeatherIcons';
import styles from './CardProps.module.css';

export interface CardItems {
  Region: string;
  locationName: string;
  date: string | number;
  temperature: number;
  description: string;
  icon?: string;
}

type CardItems_dt = {
  cardItems: CardItems;
  units: '°C' | '°F';
};

const CardProps: React.FC<CardItems_dt> = ({ cardItems, units }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <p>{cardItems.Region}</p>
        <h3>{cardItems.locationName}</h3>
        <p>{cardItems.date}</p>

        <div className={styles.iconWrapper}>
          <WeatherIcon iconName={cardItems.icon || 'clear-day'} size="xl" />
        </div>

        <div className={styles.temp_descrip}>
          <h1>{cardItems.temperature}{units}</h1>
          <p>{cardItems.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProps;