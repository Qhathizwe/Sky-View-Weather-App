
import React, { useState, useEffect } from 'react';
import useWeather from '../../hooks/useFetchWeather';

import { Nav } from '../../Components/nav/Nav';
import Search from '../../Components/search/Search';
import CardProps from '../../Components/location card/CardProps';
import WindCard from '../../Components/wind speed/WindCard';
import { Humidity } from '../../Components/humidity/Humidity';
import Forecast from '../../Components/forecast/Forecast';

import type { CardItems } from '../../Components/location card/CardItems';
import type { WindItems } from '../../Components/wind speed/WindItems';
import type { HumidityItems } from '../../Components/humidity/HumidityItems';
import type { ForecastItems } from '../../Components/forecast/ForecastItems';

import styles from './Home.module.css';
// import WeatherIcon from '../../Components/weather-icons/WeatherIcons';

const SAVED_LOCATIONS_KEY = 'saved-locations';
const DEFAULT_UNITS_KEY = 'weather-units';

export const Home: React.FC = () => {
  const [cityQuery, setCityQuery] = useState<string>('Pietermaritzburg');
  const [units, setUnits] = useState<'°C' | '°F'>(() => {
    const saved = localStorage.getItem(DEFAULT_UNITS_KEY);
    return saved === '°F' ? '°F' : '°C';
  });
  const [geoError, setGeoError] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const { data, loading, error } = useWeather(cityQuery, units);

  // Load saved locations from localStorage
  const getSavedLocations = (): string[] => {
    try {
      const raw = localStorage.getItem(SAVED_LOCATIONS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const saveLocation = (location: string) => {
    const saved = getSavedLocations();
    if (!saved.includes(location)) {
      const updated = [...saved, location];
      localStorage.setItem(SAVED_LOCATIONS_KEY, JSON.stringify(updated));
      setNotification(`Saved ${location}`);
      setTimeout(() => setNotification(null), 3000);
    } else {
      setNotification(`${location} is already saved`);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const toggleUnits = () => {
    setUnits((prev) => {
      const next = prev === '°C' ? '°F' : '°C';
      localStorage.setItem(DEFAULT_UNITS_KEY, next);
      return next;
    });
  };

  // Request geolocation on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCityQuery(`${latitude},${longitude}`);
      },
      (err) => {
        console.error('Geolocation error:', err);
        setGeoError('Location access denied. Using default location.');
      }
    );
  }, []);

  // Show weather alerts as notifications
  useEffect(() => {
    if (data?.alerts && data.alerts.length > 0) {
      const alert = data.alerts[0];
      setNotification(`⚠️ ${alert.event}: ${alert.headline}`);
      const timer = setTimeout(() => setNotification(null), 8000);
      return () => clearTimeout(timer);
    }
  }, [data?.alerts]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Synchronising weather feeds...</p>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className={styles.errorContainer}>
        <p>{error}</p>
        {geoError && <p className={styles.geoError}>{geoError}</p>}
      </div>
    );
  }

  if (!data) return null;

  const cardItemsData: CardItems = {
    Region: data.resolvedAddress || data.timezone || 'Unknown Location',
    locationName: cityQuery.includes(',') ? 'Current Location' : cityQuery,
    date: new Date().toLocaleDateString('en-ZA', {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
    temperature: Math.round(data.currentConditions.temp),
    description: data.currentConditions.conditions || 'Clear',
    icon: data.currentConditions.icon,
  };

  const windItemsData: WindItems = {
    title: 'Wind Speed',
    WindSpeed: data.currentConditions.windspeed,
    description: `Wind gusts up to ${Math.round(data.currentConditions.windspeed * 1.2)} ${units === '°C' ? 'km/h' : 'mph'}`,
  };

  const humidityItemsData: HumidityItems = {
    title: 'Humidity',
    humidity: data.currentConditions.humidity,
    description: 'Relative air moisture levels',
  };

  const forecastItemsData: ForecastItems = {
    days: data.days.slice(0, 7).map((day) => ({
      date: day.datetime,
      tempMax: day.tempmax,
      tempMin: day.tempmin,
      conditions: day.conditions,
      icon: day.icon,
    })),
    hours: data.days[0]?.hours.slice(0, 12).map((hour) => ({
      time: hour.datetime,
      temp: hour.temp,
      conditions: hour.conditions,
      icon: hour.icon,
    })) || [],
  };

  return (
    <div className={styles.AppContainer}>
      <Nav />
      
      {notification && (
        <div className={styles.notification} onClick={() => setNotification(null)}>
          {notification}
        </div>
      )}

      <Search onSearchSubmit={(newLocation) => setCityQuery(newLocation)} />

      <div className={styles.saveBtnContainer}>
        <button className={styles.saveBtn} onClick={() => saveLocation(cityQuery)}>
          ⭐ Save Location
        </button>
        <button className={styles.unitToggleBtn} onClick={toggleUnits}>
          {units}
        </button>
      </div>

      <CardProps cardItems={cardItemsData} units={units} />

      <div className={styles.wind_humidity}>
        <WindCard windItems={windItemsData} />
        <Humidity humidityItems={humidityItemsData} />
      </div>

      <Forecast forecastItems={forecastItemsData} units={units} />
    </div>
  );
};