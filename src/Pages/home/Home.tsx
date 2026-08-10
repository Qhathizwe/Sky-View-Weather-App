// src/Pages/home/Home.tsx
import React, { useState } from 'react';
import useFetchWeather from '../../hooks/useFetchWeather'

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

export const Home: React.FC = () => {

  const [cityQuery, setCityQuery] = useState<string>("Pietermaritzburg");
  
  const { data, loading, error } = useFetchWeather(cityQuery);

  if (loading) return <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>Synchronising weather feeds...</div>;
  if (error) return <div style={{ padding: '40px', color: 'red', textAlign: 'center' }}>{error}</div>;
  if (!data) return null;

 //Reference: assisted by google AI
  const cardItemsData: CardItems = {
    Region: data.timezone || "KwaZulu Natal, South Africa",
    locationName: cityQuery,
    date: new Date().toLocaleDateString('en-ZA', {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }),
    temperature: Math.round(data.currentConditions.temp),
    description: data.currentConditions.conditions || "Sunny"
  };


  const windItemsData: WindItems = {
    title: "Wind Speed",
    WindSpeed: data.currentConditions.windspeed,
    description: `Wind gusts up to ${data.currentConditions.windspeed} km/h`
  };


  const humidityItemsData: HumidityItems = {
    title: "Humidity",
    humidity: data.currentConditions.humidity,
    description: "Relative air moisture levels"
  };


  const forecastItemsData: ForecastItems = {
    days: data.days.slice(0, 7).map((day) => ({
      date: day.datetime,
      tempMax: day.tempmax,
      tempMin: day.tempmin,
      conditions: day.conditions
    })),
 
    hours: data.days[0].hours.slice(0, 12).map((hour) => ({
      time: hour.datetime,
      temp: hour.temp,
      conditions: hour.conditions
    }))
  };

  return (
    <div className={styles.AppContainer}>
        <Nav />
     
        <Search onSearchSubmit={(newLocation) => setCityQuery(newLocation)} />
        
        <CardProps cardItems={cardItemsData} /> 
        
        <div className={styles.wind_humidity}>
          <WindCard windItems={windItemsData} />
          <Humidity humidityItems={humidityItemsData} />
        </div> 

        <Forecast forecastItems={forecastItemsData} />
    </div>
  );
};
