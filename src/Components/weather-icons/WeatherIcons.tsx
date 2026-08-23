import React from 'react';
import styles from './WeatherIcon.module.css';

type WeatherIconProps = {
  iconName: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const iconMap: Record<string, string> = {
  'clear-day': '☀️',
  'clear-night': '🌙',
  'partly-cloudy-day': '⛅',
  'partly-cloudy-night': '☁️',
  'cloudy': '☁️',
  'rain': '🌧️',
  'showers-day': '🌦️',
  'showers-night': '🌧️',
  'snow': '❄️',
  'snow-showers-day': '🌨️',
  'snow-showers-night': '🌨️',
  'thunder-rain': '⛈️',
  'thunder-showers-day': '⛈️',
  'thunder-showers-night': '⛈️',
  'fog': '🌫️',
  'wind': '💨',
  'sleet': '🌨️',
  'hail': '🧊',
  'tornado': '🌪️',
  'hurricane': '🌀',
};

const sizeMap = {
  sm: '28px',
  md: '48px',
  lg: '72px',
  xl: '96px',
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconName, size = 'md' }) => {
  const emoji = iconMap[iconName] || iconMap['clear-day'];

  return (
    <span
      className={styles.weatherIcon}
      style={{ fontSize: sizeMap[size] }}
      title={iconName.replace(/-/g, ' ')}
    >
      {emoji}
    </span>
  );
};

export default WeatherIcon;