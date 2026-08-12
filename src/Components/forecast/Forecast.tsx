// src/Components/forecast/Forecast.tsx
import React from 'react';
import type { ForecastItems } from './ForecastItems';
import styles from './Forecast.module.css';

type ForecastProps = {
  forecastItems: ForecastItems;
};

const Forecast: React.FC<ForecastProps> = ({ forecastItems }) => {
  return (
    <div className={styles.forecastContainer}>
      
      {/* --- SECTION 1: 7-DAY EXTENDED FORECAST --- */}
      <div className={styles.forecastSection}>
        <h3 className={styles.sectionTitle}>7-Day Outlook</h3>
        <div className={styles.scrollTrack}>
          {forecastItems.days.map((day) => {
            // (YYYY-MM-DD) format
            const displayDate = new Date(day.date).toLocaleDateString(undefined, {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            });

            return (
              <div key={day.date} className={styles.forecastCard}>
                <p className={styles.dateLabel}>{displayDate}</p>
                <div className={styles.tempRange}>
                  <span className={styles.highTemp}>{Math.round(day.tempMax)}°</span>
                  <span className={styles.lowTemp}>{Math.round(day.tempMin)}°</span>
                </div>
                <p className={styles.condLabel}>{day.conditions}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- SECTION 2: HOURLY FORECAST --- */}
      <div className={styles.forecastSection}>
        <h3 className={styles.sectionTitle}>Hourly Breakdown</h3>
        <div className={styles.scrollTrack}>
          {forecastItems.hours.map((hour, idx) => (
            <div key={`${hour.time}-${idx}`} className={styles.forecastCard}>
              <p className={styles.timeLabel}>{hour.time.slice(0, 5)}</p>
              <h2 className={styles.hourTemp}>{Math.round(hour.temp)}°C</h2>
              <p className={styles.condLabel}>{hour.conditions}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Forecast;
