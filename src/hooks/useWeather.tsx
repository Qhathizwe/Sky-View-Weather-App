import { useState, useEffect } from 'react';
import axios from 'axios';

export interface WeatherData {
  currentConditions: {
    datetime: string;
    temp: number;
    windspeed: number;
    humidity: number;
  };
  days: Array<{
    datetime: string;
    tempmax: number;
    tempmin: number;
    hours: Array<{
      datetime: string;
      temp: number;
      windspeed: number;
      humidity: number;
    }>;
  }>;
}

export function useWeather(lat: number, lon: number) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      const apiKey = import.meta.env.VITE_VISUAL_CROSSING_KEY;

    
      if (!apiKey) {
        setError("API Key configuration error inside environment environment systems.");
        setLoading(false);
        return;
      }

      const url = `https://visualcrossing.com{lat},${lon}?unitGroup=metric&key=${apiKey}&contentType=json&include=current,hours,days`;

      try {
        setLoading(true);
        const response = await axios.get<WeatherData>(url);
        setData(response.data);
        setError(null);
      } catch (err: unknown) {
        setError("Unable to stream local weather metrics matrix patterns.");
        console.error(err instanceof Error ? err.message : err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [lat, lon]);

  return { data, loading, error };
}
