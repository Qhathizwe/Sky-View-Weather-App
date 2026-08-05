import './App.css'
import { Nav } from './Components/nav/Nav'
import Search from './Components/search/Search'
import CardProps from './Components/location card/CardProps'
import WindCard from './Components/wind speed/WindCard'
import { Humidity } from './Components/humidity/Humidity'
import Forecast from './Components/forecast/Forecast'

//npm install react-router-dom
//const router = createBrowserRouter([{}])

// import { fetchWeatherApi } from 'openmeteo'

// const params = {
//   latitude: 52.52,
//   logitude: 13.41,
//   hourly: "temperature_2m",
// }
// const url = "https://api.open-meteo.com/v1/forecast";
// const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
// const response = responses[0];

// Attributes for timezone and location
// const latitude = response.latitude();
// const longitude = response.longitude();
// const elevation = response.elevation();
// const utcOffsetSeconds = response.utcOffsetSeconds();

// console.log(
// 	`\nCoordinates: ${latitude}°N ${longitude}°E`,
// 	`\nElevation: ${elevation}m asl`,
// 	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
// );

// const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
// const weatherData = {
// 	hourly: {
// 		time: Array.from(
// 			{ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
// 			(_ , i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
// 		),
// 		temperature_2m: hourly.variables(0)!.valuesArray(),
// 	},
// };

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
// console.log("\nHourly data:\n", weatherData.hourly)


function App() {
  return (
    <>
    <div className={"AppContainer"}>
        <Nav />
        <Search />
        <CardProps cardItems={{Region: "KwaZulu Natal, South Africa", locationName: "Pietermaritzburg", date: "Wednesday, 09:00am" , temperature: 30, description: "Sunny",}}/> 
        <div className="wind_humidity">
        <WindCard windItems={{title:"Wind Speed", WindSpeed: "5", description: "from the S", }}/>
        <Humidity humidityItems={{title: "Humidity", humidity:"38", description: "Relative humidity"}}/>
        </div> 
        <Forecast />
    </div>

    </>
  )
}

export default App
