// src/Components/forecast/ForecastItems.ts

export interface DayForecast {
  date: string;
  tempMax: number;
  tempMin: number;
  conditions: string;
}

export interface HourForecast {
  time: string;
  temp: number;
  conditions: string;
}

export interface ForecastItems {
  days: DayForecast[];
  hours: HourForecast[];
}
