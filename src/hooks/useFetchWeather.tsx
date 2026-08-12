// src/hooks/useFetchWeather.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface WeatherData {
  timezone: string;
  currentConditions: {
    datetime: string;
    temp: number;
    windspeed: number;
    humidity: number;
    conditions: string;
  };
  days: Array<{
    datetime: string;
    tempmax: number;
    tempmin: number;
    conditions: string;
    hours: Array<{
      datetime: string;
      temp: number;
      windspeed: number;
      humidity: number;
      conditions: string;
    }>;
  }>;
}

export default function useWeather(locationQuery: string) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      const apiKey = import.meta.env.VITE_VISUAL_CROSSING_KEY;

      if (!apiKey) {
        setError("API Key configuration error.");
        setLoading(false);
        return;
      }

      const Location = locationQuery.trim();
      if (!Location) return;

      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(Location)}?unitGroup=metric&key=${apiKey}&contentType=json&include=current,hours,days`;
      try {
        setLoading(true);
        const response = await axios.get<WeatherData>(url);
        setData(response.data);
        setError(null);
      } catch (err: unknown) {
        setError("Unable to stream weather datasets.");
        console.error(err instanceof Error ? err.message : err);
      } finally {
        setLoading(false);
      }
    }

    if (locationQuery && locationQuery.trim() !== '') {
      fetchWeather();
    }
  }, [locationQuery]);

  return { data, loading, error };
}
