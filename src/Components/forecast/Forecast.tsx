// src/Components/forecast/Forecast.tsx
import React from 'react';
import WeatherIcon from '../weather-icons/WeatherIcons';
import styles from './Forecast.module.css';

type ForecastProps = {
  forecastItems: ForecastItems;
  units: '°C' | '°F';
};

export interface DayForecast {
  date: string;
  tempMax: number;
  tempMin: number;
  conditions: string;
  icon?: string;
}

export interface HourForecast {
  time: string;
  temp: number;
  conditions: string;
  icon?: string;
}

export interface ForecastItems {
  days: DayForecast[];
  hours: HourForecast[];
}

const Forecast: React.FC<ForecastProps> = ({ forecastItems, units }) => {
  return (
    <div className={styles.forecastContainer}>
      {/* 7-Day Extended Forecast */}
      <div className={styles.forecastSection}>
        <h3 className={styles.sectionTitle}>7-Day Outlook</h3>
        <div className={styles.scrollTrack}>
          {forecastItems.days.map((day) => {
            const displayDate = new Date(day.date).toLocaleDateString(undefined, {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            });

            return (
              <div key={day.date} className={styles.forecastCard}>
                <p className={styles.dateLabel}>{displayDate}</p>
                <WeatherIcon iconName={day.icon || 'clear-day'} size="md" />
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

      {/* Hourly Forecast */}
      <div className={styles.forecastSection}>
        <h3 className={styles.sectionTitle}>Hourly Breakdown</h3>
        <div className={styles.scrollTrack}>
          {forecastItems.hours.map((hour, idx) => (
            <div key={`${hour.time}-${idx}`} className={styles.forecastCard}>
              <p className={styles.timeLabel}>{hour.time.slice(0, 5)}</p>
              <WeatherIcon iconName={hour.icon || 'clear-day'} size="sm" />
              <h2 className={styles.hourTemp}>{Math.round(hour.temp)}{units}</h2>
              <p className={styles.condLabel}>{hour.conditions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;