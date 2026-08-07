import axios from 'axios'

export const GetWeather = async () => 
await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline?.json key=${import.meta.env.VITE_WEATHER_API_KEY} &q=${latitude}, ${longitude}&days=7 ');

