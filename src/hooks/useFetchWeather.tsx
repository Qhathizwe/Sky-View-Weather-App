
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export interface WeatherData {
  timezone: string;
  resolvedAddress: string;
  currentConditions: {
    datetime: string;
    temp: number;
    windspeed: number;
    humidity: number;
    conditions: string;
    icon: string;
  };
  days: Array<{
    datetime: string;
    tempmax: number;
    tempmin: number;
    conditions: string;
    icon: string;
    hours: Array<{
      datetime: string;
      temp: number;
      windspeed: number;
      humidity: number;
      conditions: string;
      icon: string;
    }>;
  }>;
  alerts?: Array<{
    event: string;
    headline: string;
    description: string;
    icon: string;
  }>;
}

const CACHE_KEY = 'weather-cache';
const CACHE_EXPIRY = 1000 * 60 * 30; // 30 minutes

interface CacheEntry {
  query: string;
  unitGroup: string;
  data: WeatherData;
  timestamp: number;
}

export default function useWeather(locationQuery: string, unitSymbol: '°C' | '°F') {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const unitGroup = unitSymbol === '°C' ? 'metric' : 'us';

  const fetchWeather = useCallback(async (query: string, group: string) => {
    const apiKey = import.meta.env.VITE_VISUAL_CROSSING_KEY;
    if (!apiKey) {
      setError('API Key configuration error.');
      setLoading(false);
      return;
    }

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    // Check cache first
    try {
      const cachedRaw = localStorage.getItem(CACHE_KEY);
      if (cachedRaw) {
        const cached: CacheEntry = JSON.parse(cachedRaw);
        if (
          cached.query === trimmedQuery &&
          cached.unitGroup === group &&
          Date.now() - cached.timestamp < CACHE_EXPIRY
        ) {
          setData(cached.data);
          setLoading(false);
          return;
        }
      }
    } catch {
      // ignore cache errors
    }

    try {
      setLoading(true);
      setError(null);
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
        trimmedQuery
      )}?unitGroup=${group}&key=${apiKey}&contentType=json&include=current,hours,days,alerts`;
      
      const response = await axios.get<WeatherData>(url);
      setData(response.data);

      // Save to cache
      const entry: CacheEntry = {
        query: trimmedQuery,
        unitGroup: group,
        data: response.data,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
    } catch (err: unknown) {
      // Try to use stale cache if offline
      try {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached: CacheEntry = JSON.parse(cachedRaw);
          if (cached.query === trimmedQuery) {
            setData(cached.data);
            setError('Showing cached data (offline)');
            setLoading(false);
            return;
          }
        }
      } catch {
        // ignore
      }
      setError('Unable to fetch weather data. Please try again.');
      console.error(err instanceof Error ? err.message : err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (locationQuery && locationQuery.trim() !== '') {
      fetchWeather(locationQuery, unitGroup);
    }
  }, [locationQuery, unitGroup, fetchWeather]);

  return { data, loading, error, refetch: () => fetchWeather(locationQuery, unitGroup) };
}